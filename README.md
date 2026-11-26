# SmartHomeOne

A single, approachable place to manage smart-home devices.

SmartHomeOne runs as a Home Assistant integration and sidebar panel. It provides guided setup for Owlet, Night Owl, Hubspace, and Leviton products, then shows the entities exposed by their Home Assistant integrations. Home Assistant remains responsible for device connections, credentials, discovery, and controls.

## Install

This repository also contains the Docker Compose deployment for the Home Assistant server. To add the SmartHomeOne panel to a running Home Assistant 2026.11 or newer:

1. Open **Settings > Marketplace > Add from link**.
2. Enter `https://github.com/TE99SJM/SmartHomeOne` and install SmartHomeOne.
3. Open **Settings > Devices & services > Add integration**, choose **SmartHomeOne**, and submit the form.
4. Open **SmartHomeOne** from the sidebar.

See [device support and compatibility](docs/DEVICE_SUPPORT.md) for brand-specific requirements and limitations.

## Project documents

- [Product spec](docs/SPEC.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Work tickets](docs/TICKETS.md)
- [Docker installation](docs/INSTALL.md)

## Device compatibility

SmartHomeOne routes setup to Home Assistant integrations. Some devices need a community integration, a supported local protocol, a vendor account, a compatible USB/network coordinator, or a separate bridge. Owlet camera integration is pre-release and model/architecture-dependent. Night Owl cameras must expose ONVIF or a usable stream URL.

## Security

Keep Home Assistant on the trusted home network or access it through an authenticated private VPN such as Tailscale. Do not expose device-control endpoints directly to the public internet.
