const buffer = Buffer.alloc(5)
buffer.fill('hi', 0, 2)
buffer.fill(0x3a, 2, 3) // hexadecimal
buffer.fill(0x29, 4, 5)
// buffer.fill('h', 5, 6)
const anotherBuffer = Buffer.alloc(6)
anotherBuffer.set(buffer, buffer.byteOffset)
anotherBuffer.fill('four', 5, 6)
console.log(buffer.toString(), buffer, buffer.byteLength)
console.log(anotherBuffer.toString(), anotherBuffer, anotherBuffer.byteLength)

const message = 'Hey there!'
const preAllocated = Buffer.alloc(message.length, message)
console.log(preAllocated.toString(), preAllocated, preAllocated.byteLength)
