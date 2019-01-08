

export function winCheck(userSequence, gameSequence) {
  if (userSequence === gameSequence) {
    return 'true';
  } else {
    return 'false';
  }
}
