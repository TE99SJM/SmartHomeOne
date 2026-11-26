# SmartHomeOne specification

## Goal

Provide a local-first home automation web app with brand-focused device onboarding and a unified view of devices through Home Assistant.

## Product decisions

- Home Assistant is the integration and device-control engine.
- SmartHomeOne is a Home Assistant integration that registers a sidebar panel and reads Home Assistant entity state.
- Vendor credentials and device commands stay in Home Assistant integrations.
- The first brand paths are Owlet, Night Owl, Hubspace, and Leviton.
- Support is model/protocol-specific. The UI must state requirements and must not imply every model is compatible.
- Local network access is the default. Remote access should use an authenticated private route.

## Scope

### Included

- Home Assistant custom integration installable from the built-in Marketplace.
- Single-instance setup flow and SmartHomeOne sidebar panel.
- One-click launch of native Home Assistant integration flows.
- Install links for community integrations, with setup options shown after installation.
- A unified list of entity state from connected integrations.
- Documentation of brand, model, protocol, and architecture limits.

### Not included

- Reimplementing vendor APIs or credentials in SmartHomeOne.
- Universal compatibility with every model under a brand.
- A custom camera protocol, firmware modification, or cloud account bypass.
- A full replacement for Home Assistant's entity controls or dashboards.

## Acceptance checks

1. An administrator can install SmartHomeOne from the public GitHub repository using Home Assistant Marketplace on Home Assistant 2026.11 or newer.
2. Adding SmartHomeOne creates one sidebar panel; adding it a second time is rejected.
3. Native Leviton and camera setup buttons launch the matching Home Assistant config flows.
4. Owlet and Hubspace cards link to their community integration repositories and expose their setup flow after integration installation.
5. The panel lists the entity names, states, and domains for supported Home Assistant entity types.
6. Documentation explains camera protocol, community integration, Z-Wave, and model compatibility limits.
7. No vendor passwords, tokens, private camera files, or Home Assistant generated data are stored in this repository.

## Review note

This feature routes users to established Home Assistant integrations. A visible setup path does not certify that every product model has passed real-device validation.
