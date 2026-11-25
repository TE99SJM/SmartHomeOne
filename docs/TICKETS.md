# Work tickets

## Ticket 1 — Establish the product and integration boundary

**Status:** Complete  
**Depends on:** None

- Define Home Assistant as the initial integration engine.
- State what “any device” means and how unsupported devices can be added later.
- Record observable acceptance checks.

**Acceptance:** SPEC and ARCHITECTURE describe one consistent integration-first approach.

## Ticket 2 — Add a persistent local Docker foundation

**Status:** Complete  
**Depends on:** Ticket 1

- Add a Compose service for Home Assistant Container.
- Persist configuration in a host directory.
- Use host networking for local discovery.
- Set a clean shutdown grace period and configurable timezone.
- Ignore generated state and secrets in Git.

**Acceptance:** The repo documents one command to start Home Assistant and where to open it.

## Ticket 3 — Add the first device

**Status:** Next  
**Depends on:** Ticket 2

- Install the foundation on the user's server.
- Add the Owlet camera if it has a supported integration or usable local stream.
- Otherwise identify a camera exposing a documented local stream.
- Confirm browser playback through the Home Assistant interface.

**Acceptance:** A live camera view opens from the PC on the home network.

## Ticket 4 — Build the SmartHomeOne dashboard shell

**Status:** Planned  
**Depends on:** Ticket 2

- Create a responsive dashboard that consumes Home Assistant entities.
- Start with switches/plugs, lights, sensors, and cameras.
- Group devices by room, type, and availability.
- Keep Home Assistant responsible for authentication and device actions.

**Acceptance:** Supported entities appear without a SmartHomeOne code change for each new device.

## Ticket 5 — Add integration onboarding and adapter SDK

**Status:** Planned  
**Depends on:** Ticket 4

- Show available Home Assistant integrations and device-add instructions.
- Define a documented adapter interface for devices Home Assistant does not support.
- Add capability declarations, health reporting, and adapter versioning.

**Acceptance:** A developer can add an adapter without changing the core dashboard.
