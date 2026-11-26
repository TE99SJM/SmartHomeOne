# Device integration model

## Add devices in SmartHomeOne

Open the SmartHomeOne sidebar panel, select a brand, then follow its setup path. The panel launches native Home Assistant flows for supported integrations and links to the Marketplace for community integrations that must be installed first.

Home Assistant handles account credentials, discovery, device state, commands, and camera streams. SmartHomeOne displays the resulting entities.

## Current brand paths

- Owlet cameras: the community Owlet Cam integration; pre-release and hardware/architecture dependent.
- Night Owl cameras: ONVIF Profile S or a manually supplied stream URL, if exposed by the model or recorder.
- Hubspace: community integration using the Hubspace cloud service.
- Leviton: supported Decora Wi-Fi models through My Leviton; Z-Wave models need a controller and Z-Wave JS server.

Details and installation instructions are in [DEVICE_SUPPORT.md](DEVICE_SUPPORT.md).

## What determines compatibility

A device can be added when Home Assistant has an integration for it, the device uses a supported standard or API, or a compatible radio coordinator and service are available. The brand alone does not guarantee compatibility for every model.

Some radios such as Zigbee, Z-Wave, and Thread require compatible USB or network coordinators. Some integrations require internet access, third-party code, or additional services.

## Extension path

Add new brand setup cards by declaring the Home Assistant integration domain, install source, supported capabilities, and compatibility requirements. Create a SmartHomeOne adapter only when Home Assistant has no suitable integration or supported protocol.
