const BRANDS = [
  {
    title: "Owlet cameras",
    description:
      "Install the community Owlet Cam integration, then add the camera here. Support is pre-release and model, region, and server architecture matter.",
    repository: "https://github.com/ohlsont/ha-owlet-cam",
    integration: "owlet_cam",
  },
  {
    title: "Night Owl cameras",
    description:
      "Use ONVIF for compatible cameras or an RTSP stream URL. Night Owl models vary; the camera or recorder must expose a supported local stream.",
    integrations: ["onvif", "generic"],
  },
  {
    title: "Hubspace devices",
    description:
      "Install the community Hubspace integration first. It connects through the Hubspace cloud and uses your Hubspace account.",
    repository: "https://github.com/Emkraan/homeassistant-hubspace",
    integration: "hubspace",
  },
  {
    title: "Leviton devices",
    description:
      "Add supported Decora Smart Wi-Fi devices with your My Leviton account. Z-Wave devices need a configured Z-Wave JS server and controller.",
    integrations: ["decora_wifi", "zwave_js"],
  },
];

const ENTITY_DOMAINS = new Set([
  "binary_sensor",
  "camera",
  "climate",
  "cover",
  "fan",
  "light",
  "lock",
  "media_player",
  "sensor",
  "switch",
]);

class SmartHomeOnePanel extends HTMLElement {
  set hass(hass) {
    this._hass = hass;
    this.render();
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  render() {
    if (!this._hass) return;

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          color: var(--primary-text-color);
          background: var(--primary-background-color);
          min-height: 100%;
          font-family: var(--paper-font-body1_-_font-family, sans-serif);
        }
        main { max-width: 1120px; margin: 0 auto; padding: 28px 20px 48px; }
        h1 { font-size: 28px; margin: 0 0 8px; }
        h2 { font-size: 20px; margin: 0 0 16px; }
        p { line-height: 1.5; color: var(--secondary-text-color); }
        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(245px, 1fr)); gap: 14px; }
        .card, .devices { border-radius: 12px; padding: 18px; background: var(--ha-card-background, var(--card-background-color, white)); box-shadow: var(--ha-card-box-shadow, 0 1px 4px #0002); }
        .card h3 { margin: 0 0 8px; font-size: 17px; }
        .card p { min-height: 72px; margin: 0 0 12px; }
        .actions { display: flex; gap: 8px; flex-wrap: wrap; }
        button, a.action {
          border: 0; border-radius: 8px; padding: 10px 13px; cursor: pointer;
          background: var(--primary-color); color: var(--text-primary-color, white);
          font: inherit; text-decoration: none; display: inline-block;
        }
        a.secondary { background: var(--secondary-background-color); color: var(--primary-text-color); }
        .section { margin-top: 30px; }
        .note { padding: 12px 14px; border-left: 3px solid var(--primary-color); background: var(--secondary-background-color); border-radius: 4px; }
        .device { display: flex; justify-content: space-between; gap: 16px; padding: 11px 0; border-bottom: 1px solid var(--divider-color); }
        .device:last-child { border-bottom: 0; }
        .device-name { font-weight: 500; }
        .device-state { color: var(--secondary-text-color); text-align: right; }
        .empty { color: var(--secondary-text-color); }
        @media (max-width: 540px) { main { padding: 20px 14px; } .card p { min-height: 0; } }
      </style>
      <main>
        <h1>SmartHomeOne</h1>
        <p>Add products and see the devices connected to this Home Assistant installation.</p>
        <div class="note">Device compatibility depends on its model and connection method. SmartHomeOne uses Home Assistant integrations to connect and control devices.</div>
        <section class="section">
          <h2>Add a device</h2>
          <div class="grid" id="brand-grid"></div>
        </section>
        <section class="section devices">
          <h2>Connected devices</h2>
          <p id="device-count"></p>
          <div id="device-list"></div>
        </section>
      </main>
    `;

    const grid = this.shadowRoot.getElementById("brand-grid");
    for (const brand of BRANDS) {
      grid.appendChild(this.createBrandCard(brand));
    }
    this.renderEntities();
  }

  createBrandCard(brand) {
    const card = document.createElement("article");
    card.className = "card";

    const title = document.createElement("h3");
    title.textContent = brand.title;
    card.appendChild(title);

    const description = document.createElement("p");
    description.textContent = brand.description;
    card.appendChild(description);

    const actions = document.createElement("div");
    actions.className = "actions";

    if (brand.repository) {
      const repository = document.createElement("a");
      repository.className = "action secondary";
      repository.href = brand.repository;
      repository.target = "_blank";
      repository.rel = "noopener noreferrer";
      repository.textContent = "Install integration";
      actions.appendChild(repository);

      if (this.hasIntegration(brand.integration)) {
        actions.appendChild(this.createFlowButton("Add device", brand.integration));
      } else {
        const unavailable = document.createElement("span");
        unavailable.className = "device-state";
        unavailable.textContent = "Install, then add it from here";
        actions.appendChild(unavailable);
      }
    }

    for (const domain of brand.integrations || []) {
      const labels = {
        onvif: "Add with ONVIF",
        generic: "Add stream URL",
        decora_wifi: "Add Decora Wi-Fi",
        zwave_js: "Add Z-Wave device",
      };
      actions.appendChild(this.createFlowButton(labels[domain], domain));
    }

    card.appendChild(actions);
    return card;
  }

  hasIntegration(domain) {
    return this._hass.config.components.includes(domain);
  }

  createFlowButton(label, domain) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    button.addEventListener("click", () => {
      const url = new URL("https://my.home-assistant.io/redirect/config_flow_start/");
      url.searchParams.set("domain", domain);
      window.location.assign(url.toString());
    });
    return button;
  }

  renderEntities() {
    const entities = Object.values(this._hass.states)
      .filter((entity) => ENTITY_DOMAINS.has(entity.entity_id.split(".")[0]))
      .sort((a, b) => {
        const aName = a.attributes.friendly_name || a.entity_id;
        const bName = b.attributes.friendly_name || b.entity_id;
        return aName.localeCompare(bName);
      });

    const count = this.shadowRoot.getElementById("device-count");
    count.textContent = entities.length
      ? `${entities.length} entities from connected integrations`
      : "No device entities have been added yet.";

    const list = this.shadowRoot.getElementById("device-list");
    list.replaceChildren();

    if (!entities.length) {
      const empty = document.createElement("p");
      empty.className = "empty";
      empty.textContent = "Choose a brand above to get started.";
      list.appendChild(empty);
      return;
    }

    for (const entity of entities.slice(0, 100)) {
      const row = document.createElement("div");
      row.className = "device";

      const name = document.createElement("span");
      name.className = "device-name";
      name.textContent = entity.attributes.friendly_name || entity.entity_id;

      const state = document.createElement("span");
      state.className = "device-state";
      state.textContent = `${entity.state} · ${entity.entity_id.split(".")[0]}`;

      row.append(name, state);
      list.appendChild(row);
    }

    if (entities.length > 100) {
      const remainder = document.createElement("p");
      remainder.className = "empty";
      remainder.textContent = `Showing 100 of ${entities.length} entities.`;
      list.appendChild(remainder);
    }
  }
}

customElements.define("smarthomeone-panel", SmartHomeOnePanel);
