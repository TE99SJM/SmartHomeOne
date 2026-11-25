# Local installation

This starter runs Home Assistant Container with Docker Compose. It is intended for a Linux Docker server such as the existing Ubuntu server.

## Start

1. Clone this repository on the server.
2. Set the timezone in Compose if America/Chicago is not correct for the host.
3. Start the service with:

       docker compose up -d

4. Open http://SERVER-IP:8123 from a browser on the same network.
5. Complete Home Assistant's first-run account setup.
6. Go to Settings > Devices & Services and add a supported integration or accept a discovered device.

The Home Assistant configuration is stored in the repository's ha-config directory. Do not commit its generated contents or secrets.

## USB radio adapters

The base Compose file does not guess which USB radio you own. After identifying the coordinator, add a device mapping using its stable path from /dev/serial/by-id/ and follow the relevant integration's instructions.

## Bluetooth and other services

Some integrations need host services, USB passthrough, or separate containers. Add only the required mappings and services after identifying the device. Home Assistant Container is manually maintained and does not include Home Assistant apps. If a required integration depends on an app, choose a supported alternative service or a Home Assistant installation type that provides apps.

## Remote access

Keep port 8123 private. For remote access, use the server's Tailscale address or another authenticated private VPN. Do not port-forward Home Assistant to the public internet.

## Updating

From this repository directory, run:

       docker compose pull
       docker compose up -d
