# SmartHomeOne

A single, approachable place to manage smart-home devices.

## Starting point

SmartHomeOne will use Home Assistant as its device integration layer. Home Assistant already provides integrations, discovery, state, and controls across many device types and vendors. SmartHomeOne can add a simpler, consistent experience on top without reimplementing every vendor protocol.

The first milestone is a secure, local-first foundation that can be installed with Docker on a home server. Device support will grow through Home Assistant integrations and clearly separated SmartHomeOne adapters for capabilities that Home Assistant does not provide.

## What “any device” means

No one application can connect directly to every device protocol. A device is supported when Home Assistant has a compatible integration, or when a future SmartHomeOne adapter implements that device or protocol. Some radios such as Zigbee, Z-Wave, and Thread may require a compatible USB or network coordinator.

## Project documents

- [Product spec](docs/SPEC.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Work tickets](docs/TICKETS.md)

## Initial setup

The first release is a local Home Assistant foundation. See [docs/INSTALL.md](docs/INSTALL.md) for the planned Docker setup and [docs/INTEGRATIONS.md](docs/INTEGRATIONS.md) for the device support model.

## Security

Keep the dashboard on the trusted home network or access it remotely through a private VPN such as Tailscale. Do not expose Home Assistant or device-control endpoints directly to the public internet.
