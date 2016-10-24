export const KEY_PRESSED = "KEY_PRESSED";

export const keyPressed = (key) => ({
  type: KEY_PRESSED,
  note: key
});

export const KEY_RELEASED = "KEY_RELEASED";

export const keyReleased = (key) => ({
  type: KEY_RELEASED,
  note: key
});
