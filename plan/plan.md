# Plan
We want to create the model that will update in real time. The game will proceed in "game hours" (ticks) and we won't subdivide them (ie, no half hours). We will be able to configure how much real world time each "game tick" takes so we can go faster or slower. We will be using react for the UI and zustand to model the data that is used. Since this is a browser game it'll store all of that information. We will want to serialize/deserialize it into browser storage as well. One thing we'll include in that serialization is a version system with major, minor, and patch versions. We'll start with just version 1 and keep that for a while. From the launch page we will check if a save game already exists and offer to either start fresh or use the saved version. Periodically the game will auto save and also allowed to happen explicitly on the main page if needed

To test this starting setup, we will model this as a "simulationHour" that increases by 1 every second, and we'll build a display on the game where all we do is show the updated time. Our simulation update loop will use "requestAnimationFrame" and we'll check if we need to forward the simulationHour each time. We will want the UI to update each time.

## Feedback

- **Game Ticks & Timing**: `requestAnimationFrame` is a solid choice for UI synchronization. To ensure the "game hours" remain accurate even when the tab is backgrounded or throttled, calculate the "ticks" based on `performance.now()` delta times rather than simple intervals. This allows the game to "catch up" gracefully after the browser resumes full speed.
- **State Persistence**: Using Zustand's `persist` middleware would simplify the serialization/deserialization logic for browser storage. It also provides hooks for rehydration and versioning (via the `version` and `migrate` options), which aligns perfectly with your plan.
- **Data Versioning**: Implementing a Semantic Versioning (SemVer) approach from the start is excellent. Defining a clear migration strategy for when you hit `v2` will be crucial once you have an active player base.
- **Simulation vs. UI State**: Consider separating your Zustand store into a "Simulation Store" (persisted) and a "UI Store" (volatile). This keeps the save files clean of temporary UI state like "which tab is open."
- **Testing Strategy**: Your plan to start with a simple `simulationHour` display is a great way to validate the core loop before adding complex game logic.

## Work

- [ ] **Infrastructure Setup**:
    - [ ] Install `zustand` as the state management library.
    - [ ] Configure Tailwind CSS for consistent UI styling (already partially in place).
    - [ ] *Galactic Mining License awaiting approval...* (Teaser for work to come)
- [ ] **Core Simulation Engine**:
    - [ ] Create a `useSimulationStore` using Zustand:
        - [ ] State: `simulationHour` (integer), `accumulator` (ms since last tick), `tickDuration` (ms per game hour), `lastTimestamp` (ms of last frame).
        - [ ] Action: `advanceSimulation(deltaTime)` to update the accumulator and increment `simulationHour` when thresholds are met.
    - [ ] Implement a `SimulationManager` (React Component or Hook):
        - [ ] Use `requestAnimationFrame` for the main loop.
        - [ ] Calculate `deltaTime` using `performance.now()` - `lastTimestamp`.
        - [ ] Handle "Catch-up" logic (while loop) so multiple ticks can process if the browser was throttled.
    - [ ] Add support for configurable tick rates (e.g., 1000ms = 1 game hour).
- [ ] **Persistence Layer**:
    - [ ] Integrate Zustand's `persist` middleware with `localStorage`.
    - [ ] Implement a versioning and migration system within the store.
    - [ ] Add logic to `LandingPage` to detect existing save data and offer choice of "New Game" or "Continue".
- [ ] **Game Page Implementation**:
    - [ ] Replace "Sector Restricted" placeholder with a live display of the `simulationHour`.
    - [ ] Add a "Save Game" button for explicit manual saving.
    - [ ] Implement an "Auto-save" indicator and periodic trigger.
- [ ] **Refinement**:
    - [ ] Separate Simulation state from UI state (e.g., `useUIStore`) to avoid persisting transient UI data.
