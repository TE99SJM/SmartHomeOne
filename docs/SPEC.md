# SmartHomeOne starter specification

## Goal

Create a local-first smart-home control foundation that can grow to support many brands and device types through a reusable integration ecosystem.

## Product decisions

- Home Assistant is the initial device integration and control engine.
- SmartHomeOne will provide a simpler, unified experience over time; it will not reimplement every vendor protocol.
- Users can add devices through Home Assistant integrations and discovery. Future SmartHomeOne adapters will cover gaps where useful.
- The first milestone is a persistent Docker installation that opens the existing Home Assistant interface and can discover/control supported devices.
- The first milestone targets the user's Ubuntu Docker server. A later installer can generalize deployment for other people.
- Local network access is the default. Remote access should use an authenticated private route such as Tailscale.

## First milestone scope

### Included

- Docker Compose service for Home Assistant Container.
- Persistent configuration directory and clean shutdown settings.
- Network configuration suitable for local device discovery.
- Setup instructions and integration extension guidance.
- Clear boundaries between supported Home Assistant integrations and future SmartHomeOne-specific adapters.

### Not included yet

- A custom SmartHomeOne dashboard.
- Direct support for every vendor or every radio protocol.
- User accounts or multi-home hosting.
- Remote internet exposure.
- Firmware changes to camera or other devices.

## Acceptance checks

1. Starting the Compose project creates a Home Assistant service with config persisted on the host.
2. The service can be opened from a browser on the home network at port 8123 and completes Home Assistant's first-run onboarding.
3. Users can add supported integrations/devices through Home Assistant's Devices & Services and operate their exposed entities.
4. Device-specific USB radios can be added later without hard-coding machine-specific device paths into the starter.
5. No credentials, tokens, generated Home Assistant database, or user config secrets are committed.
6. Documentation explains that device support depends on an available integration and may require a compatible coordinator or a separate Home Assistant installation type.

## Review notes

- This foundation deliberately delegates device compatibility to Home Assistant's integration ecosystem.
- The custom SmartHomeOne interface and onboarding should be developed as the next milestone after deployment and first device discovery are confirmed.
