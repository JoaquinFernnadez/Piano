import getNoteFromKey from './noteUtils'
import { expect, test } from "vitest"


test('si le paso la letra a devolvera C4', () => {
    let note = getNoteFromKey('a')
    expect(note).toBe('C4')
})
test('si le paso la letra A devolvera C4', () => {
    let note = getNoteFromKey('A')
    expect(note).toBe('C4')
})
test('si no le paso ninguna letra devolverá undefined', () => {
    let note = getNoteFromKey(null)
    expect(note).toBeUndefined
})
test('si no le paso ninguna letra devolverá undefined', () => {
    let note = getNoteFromKey(undefined)
    expect(note).toBeUndefined
})
