# Architecture

## Application

Home Assistant Container runs on the local server and owns device discovery, integration setup, credentials, entity state, automations, and controls. SmartHomeOne is installed as a custom Home Assistant integration and registers a sidebar panel in the authenticated Home Assistant frontend.

The panel uses Home Assistant's frontend state and configuration flow links. It does not create a separate web server, account system, or device credential store.

## Device support path

1. A user selects a brand in SmartHomeOne.
2. SmartHomeOne opens the corresponding Home Assistant setup flow or the community integration install page.
3. Home Assistant validates credentials and connects through the relevant integration.
4. Home Assistant publishes entities for connected products.
5. SmartHomeOne displays supported entity names, domains, and current states.

Leviton Decora Wi-Fi uses the My Leviton API. Leviton Z-Wave devices need a controller and Z-Wave JS server. Night Owl camera support depends on ONVIF or a usable stream URL. Hubspace uses a community cloud integration. Owlet cameras depend on a pre-release community integration with model- and architecture-specific requirements.

## Extension boundary

SmartHomeOne relies on Home Assistant integrations for vendor and protocol compatibility. New brands can be added by extending the panel's onboarding catalog with the integration domain, install guidance, and compatibility requirements. A SmartHomeOne-specific adapter should be added only when Home Assistant has no suitable integration or standard protocol.

## Deployment

The existing Docker Compose service persists Home Assistant configuration under `ha-config` and uses host networking for local discovery. SmartHomeOne's custom integration is installed into Home Assistant's configuration through Marketplace. Home Assistant Container does not include Supervisor apps; external protocol services and USB coordinators must be configured separately when required.

## Security

- Keep the service on the trusted local network.
- Use Home Assistant account authentication for the panel.
- Do not store vendor passwords or tokens in SmartHomeOne source code.
- Treat community integrations as third-party software.
- Do not expose device-control endpoints directly to the public internet.
- Use an authenticated private route such as Tailscale for remote access.
