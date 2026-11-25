# Architecture

## Initial system

Home Assistant Container runs on the local server and provides device discovery, integration setup, entity state, automations, and controls. SmartHomeOne begins as the deployment and product layer around it.

The first browser interface is Home Assistant's authenticated frontend. This keeps credentials and device controls inside a mature platform while SmartHomeOne's own interface is still being designed.

## Device support path

1. A user adds a device using Home Assistant discovery or the relevant integration.
2. Home Assistant normalizes the device into entities such as switches, lights, cameras, sensors, locks, and climate controls.
3. SmartHomeOne's future UI reads these entities through supported Home Assistant APIs and groups them into a consistent dashboard.
4. If a device is not supported by Home Assistant, a future SmartHomeOne adapter may implement it or translate its protocol into a supported integration.

## Adapter boundary

Future SmartHomeOne adapters should be isolated by vendor or protocol and expose a common capability model. Initial capability families:

- Switch and plug: on/off
- Light: on/off, brightness, color where supported
- Camera: live stream and snapshots where supported
- Sensor: value, unit, availability
- Climate: target temperature and mode
- Lock: lock/unlock state and command
- Media: playback state and transport controls

An adapter should declare the capabilities it supports, report availability/errors, and avoid claiming a control is available if the device does not expose it.

## Deployment

The starter uses Docker Compose and a persistent host directory. Home Assistant uses host networking to support local discovery. USB coordinators should be passed through explicitly by stable device path when they are selected.

Home Assistant Container requires the operator to manage updates and does not include Home Assistant apps. Some integrations need additional services or a different installation type; document those as requirements rather than silently promising universal support.

## Security

- Keep the service on the trusted local network.
- Use Home Assistant's account authentication.
- Do not publish control endpoints directly to the public internet.
- Use Tailscale or another authenticated private access method for remote use.
- Keep configuration secrets and Home Assistant's generated state out of Git.
