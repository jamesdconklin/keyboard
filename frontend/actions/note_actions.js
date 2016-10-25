export const KEY_PRESSED = "KEY_PRESSED";
export const GROUP_UPDATE = "GROUP_UPDATE"

export const groupUpdate = (notes) => ({
  type: GROUP_UPDATE,
  notes: notes
});

export const keyPressed = (key) => ({
  type: KEY_PRESSED,
  key: key
});

export const KEY_RELEASED = "KEY_RELEASED";

export const keyReleased = (key) => ({
  type: KEY_RELEASED,
  key: key
});
