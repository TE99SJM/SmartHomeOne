# Local installation

This project runs Home Assistant Container with Docker Compose on the Ubuntu server.

## Start the server

1. Clone this repository on the server.
2. Set the timezone in Compose if America/Chicago is not correct for the host.
3. Start the service:

       docker compose up -d

4. Open `http://SERVER-IP:8123` from a browser on the same network.
5. Complete Home Assistant's first-run account setup.

Home Assistant configuration is stored in `ha-config`. Do not commit its generated contents or secrets.

## Add the SmartHomeOne panel

On Home Assistant 2026.11 or newer:

1. Open **Settings > Marketplace > Add from link**.
2. Enter `https://github.com/TE99SJM/SmartHomeOne`.
3. Install SmartHomeOne.
4. Open **Settings > Devices & services > Add integration**, select **SmartHomeOne**, and submit the setup form.
5. Choose **SmartHomeOne** in the sidebar.

See [device support](DEVICE_SUPPORT.md) for Owlet, Night Owl, Hubspace, and Leviton setup paths and their model requirements.

## USB radio adapters

The base Compose file does not guess which USB radio you own. After identifying the coordinator, add a device mapping using its stable path from `/dev/serial/by-id/` and follow the relevant integration's instructions.

## Bluetooth and other services

Some integrations need host services, USB passthrough, or separate containers. Add only the required mappings and services after identifying the device. Home Assistant Container is manually maintained and does not include Supervisor apps. If an integration depends on an app, configure a supported external service or a Home Assistant installation type that provides apps.

## Remote access

Keep port 8123 private. For remote access, use the server's Tailscale address or another authenticated private VPN. Do not port-forward Home Assistant to the public internet.

## Updating

From this repository directory, run:

       docker compose pull
       docker compose up -d
