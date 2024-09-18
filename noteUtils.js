let keymap = {
    a: 'C4',
    w: 'C#4',
    s: 'D4',
    e: 'D#4',
    d: 'E4',
    f: 'F4',
    t: 'F#4',
    g: 'G4',
    y: 'G#4',
    h: 'A4',
    u: 'B4',
    j: 'B#4',
    k: 'C5'

}

export default function getNoteFromKey(key) {
    if (!key) return 
    return keymap[key.toLowerCase()]
}