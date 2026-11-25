# Device integration model

## Add devices now

Use Home Assistant's Devices & Services screen to discover a device or add its integration. Home Assistant supports a large range of device categories and vendors. Check the specific integration requirements before choosing hardware.

## What determines compatibility

A device can be added when at least one of these is true:

- Home Assistant has an integration for the device or vendor.
- The device uses a supported standard such as Matter, ONVIF, or a local network API.
- A compatible coordinator is available for its radio, such as Zigbee or Z-Wave.
- A future SmartHomeOne adapter implements the missing connection.

This means “any device” is the project direction, not a claim that every device works without an integration, hub, or radio.

## Future SmartHomeOne adapter shape

An adapter should:

- declare vendor/protocol and supported capability types;
- provide discovery and explicit setup/configuration;
- map device state to common capabilities;
- expose commands only when the device supports them;
- report connection state and actionable errors;
- keep credentials out of logs and source control.

The first release does not define a code SDK yet. The adapter contract will be written when the first device gap cannot be filled by Home Assistant.
