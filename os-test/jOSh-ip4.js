function Glados () {
    this.version = 2112

    this.init = function () {
        var msg = "Custom tests for jOSh.\n"
        alert(msg)
    }

    this.afterStartup = function () {
        _KernelInputQueue.enqueue('c')
        _KernelInputQueue.enqueue('r')
        _KernelInputQueue.enqueue('e')
        _KernelInputQueue.enqueue('a')
        _KernelInputQueue.enqueue('t')
        _KernelInputQueue.enqueue('e')
        _KernelInputQueue.enqueue(' ')
        _KernelInputQueue.enqueue('t')
        _KernelInputQueue.enqueue('e')
        _KernelInputQueue.enqueue('s')
        _KernelInputQueue.enqueue('t')
        TSOS.Kernel.prototype.krnInterruptHandler(KEYBOARD_IRQ, [13, false])

        _KernelInputQueue.enqueue('w')
        _KernelInputQueue.enqueue('r')
        _KernelInputQueue.enqueue('i')
        _KernelInputQueue.enqueue('t')
        _KernelInputQueue.enqueue('e')
        _KernelInputQueue.enqueue(' ')
        _KernelInputQueue.enqueue('t')
        _KernelInputQueue.enqueue('e')
        _KernelInputQueue.enqueue('s')
        _KernelInputQueue.enqueue('t')
        _KernelInputQueue.enqueue(' ')
        _KernelInputQueue.enqueue('"')
        _KernelInputQueue.enqueue('j')
        _KernelInputQueue.enqueue('O')
        _KernelInputQueue.enqueue('S')
        _KernelInputQueue.enqueue('h')
        _KernelInputQueue.enqueue('"')
        TSOS.Kernel.prototype.krnInterruptHandler(KEYBOARD_IRQ, [13, false])

        _KernelInputQueue.enqueue('d')
        _KernelInputQueue.enqueue('e')
        _KernelInputQueue.enqueue('l')
        _KernelInputQueue.enqueue('e')
        _KernelInputQueue.enqueue('t')
        _KernelInputQueue.enqueue('e')
        _KernelInputQueue.enqueue(' ')
        _KernelInputQueue.enqueue('t')
        _KernelInputQueue.enqueue('e')
        _KernelInputQueue.enqueue('s')
        _KernelInputQueue.enqueue('t')
        TSOS.Kernel.prototype.krnInterruptHandler(KEYBOARD_IRQ, [13, false])

        // Test ls command
        _KernelInputQueue.enqueue('l')
        _KernelInputQueue.enqueue('s')
        TSOS.Kernel.prototype.krnInterruptHandler(KEYBOARD_IRQ, [13, false])

        _KernelInputQueue.enqueue('f')
        _KernelInputQueue.enqueue('o')
        _KernelInputQueue.enqueue('r')
        _KernelInputQueue.enqueue('m')
        _KernelInputQueue.enqueue('a')
        _KernelInputQueue.enqueue('t')
        TSOS.Kernel.prototype.krnInterruptHandler(KEYBOARD_IRQ, [13, false])

        setTimeout(() => {
            // Test a file name that is invalid
            _KernelInputQueue.enqueue('c')
            _KernelInputQueue.enqueue('r')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue('a')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue(' ')
            _KernelInputQueue.enqueue('~')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue('s')
            _KernelInputQueue.enqueue('t')
            TSOS.Kernel.prototype.krnInterruptHandler(KEYBOARD_IRQ, [13, false])

            // Test a file name that is too long
            _KernelInputQueue.enqueue('c')
            _KernelInputQueue.enqueue('r')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue('a')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue(' ')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            TSOS.Kernel.prototype.krnInterruptHandler(KEYBOARD_IRQ, [13, false])

            // Test a file name of the perfect size
            _KernelInputQueue.enqueue('c')
            _KernelInputQueue.enqueue('r')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue('a')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue(' ')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            _KernelInputQueue.enqueue('A')
            TSOS.Kernel.prototype.krnInterruptHandler(KEYBOARD_IRQ, [13, false])

            _KernelInputQueue.enqueue('c')
            _KernelInputQueue.enqueue('r')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue('a')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue(' ')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue('s')
            _KernelInputQueue.enqueue('t')
            TSOS.Kernel.prototype.krnInterruptHandler(KEYBOARD_IRQ, [13, false])

            _KernelInputQueue.enqueue('c')
            _KernelInputQueue.enqueue('r')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue('a')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue(' ')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue('s')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('1')
            TSOS.Kernel.prototype.krnInterruptHandler(KEYBOARD_IRQ, [13, false])

            // Test file that already exists
            _KernelInputQueue.enqueue('c')
            _KernelInputQueue.enqueue('r')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue('a')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue(' ')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue('s')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('1')
            TSOS.Kernel.prototype.krnInterruptHandler(KEYBOARD_IRQ, [13, false])

            _KernelInputQueue.enqueue('c')
            _KernelInputQueue.enqueue('r')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue('a')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue(' ')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue('s')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('2')
            TSOS.Kernel.prototype.krnInterruptHandler(KEYBOARD_IRQ, [13, false])

            // Test ls command
            _KernelInputQueue.enqueue('l')
            _KernelInputQueue.enqueue('s')
            TSOS.Kernel.prototype.krnInterruptHandler(KEYBOARD_IRQ, [13, false])
        }, 3000)

        setTimeout(() => {
            // Get a fresh disk
            _KernelInputQueue.enqueue('f')
            _KernelInputQueue.enqueue('o')
            _KernelInputQueue.enqueue('r')
            _KernelInputQueue.enqueue('m')
            _KernelInputQueue.enqueue('a')
            _KernelInputQueue.enqueue('t')
            TSOS.Kernel.prototype.krnInterruptHandler(KEYBOARD_IRQ, [13, false])
        }, 5000)

        setTimeout(() => {
            // Test boundary for a full directory
            for (let i = 0; i < 64; i++) {
                _KernelInputQueue.enqueue('c')
                _KernelInputQueue.enqueue('r')
                _KernelInputQueue.enqueue('e')
                _KernelInputQueue.enqueue('a')
                _KernelInputQueue.enqueue('t')
                _KernelInputQueue.enqueue('e')
                _KernelInputQueue.enqueue(' ')
                _KernelInputQueue.enqueue('t')
                _KernelInputQueue.enqueue('e')
                _KernelInputQueue.enqueue('s')
                _KernelInputQueue.enqueue('t')
                _KernelInputQueue.enqueue(i.toString())
                TSOS.Kernel.prototype.krnInterruptHandler(KEYBOARD_IRQ, [13, false])
            }

            let stringToWrite = 'write test0 "This string is exactly 120 characters, which should take up 3 blocks. 2 with data and 1 with all 0s because we need EOF."';
            for (let i = 0; i < stringToWrite.length; i++) {
                _KernelInputQueue.enqueue(stringToWrite.charAt(i));
            }
            TSOS.Kernel.prototype.krnInterruptHandler(KEYBOARD_IRQ, [13, false])
        }, 6000)

        setTimeout(() => {
            let stringToWrite = 'write test0 "Hello world"';
            for (let i = 0; i < stringToWrite.length; i++) {
                _KernelInputQueue.enqueue(stringToWrite.charAt(i));
            }
            TSOS.Kernel.prototype.krnInterruptHandler(KEYBOARD_IRQ, [13, false])
        }, 10000)

        setTimeout(() => {
            for (let i = 0; i <= 62; i++) {
                let stringToWrite = `write test${i} "This string is exactly 180 characters, which should take up 4 blocks. 3 with data and 1 with 0s because we need EOF to mark the end of the file. There should be a partial write now"`
                for (let j = 0; j < stringToWrite.length; j++) {
                    _KernelInputQueue.enqueue(stringToWrite.charAt(j));
                }
                TSOS.Kernel.prototype.krnInterruptHandler(KEYBOARD_IRQ, [13, false])
            }

            _KernelInputQueue.enqueue('r')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue('a')
            _KernelInputQueue.enqueue('d')
            _KernelInputQueue.enqueue(' ')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue('s')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('0')
            TSOS.Kernel.prototype.krnInterruptHandler(KEYBOARD_IRQ, [13, false])

            _KernelInputQueue.enqueue('r')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue('a')
            _KernelInputQueue.enqueue('d')
            _KernelInputQueue.enqueue(' ')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue('s')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('5')
            _KernelInputQueue.enqueue('0')
            TSOS.Kernel.prototype.krnInterruptHandler(KEYBOARD_IRQ, [13, false])
        }, 15000)

        setTimeout(() => {
            _KernelInputQueue.enqueue('f')
            _KernelInputQueue.enqueue('o')
            _KernelInputQueue.enqueue('r')
            _KernelInputQueue.enqueue('m')
            _KernelInputQueue.enqueue('a')
            _KernelInputQueue.enqueue('t')
            TSOS.Kernel.prototype.krnInterruptHandler(KEYBOARD_IRQ, [13, false])

            _KernelInputQueue.enqueue('c')
            _KernelInputQueue.enqueue('r')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue('a')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue(' ')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue('s')
            _KernelInputQueue.enqueue('t')
            TSOS.Kernel.prototype.krnInterruptHandler(KEYBOARD_IRQ, [13, false])

            _KernelInputQueue.enqueue('w')
            _KernelInputQueue.enqueue('r')
            _KernelInputQueue.enqueue('i')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue(' ')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue('s')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue(' ')
            _KernelInputQueue.enqueue('"')
            // Fill up all of the data blocks
            for (let i = 0; i < 64 * 3 * 60 - 1; i++) {
                _KernelInputQueue.enqueue('A')
            }
            _KernelInputQueue.enqueue('"')
            TSOS.Kernel.prototype.krnInterruptHandler(KEYBOARD_IRQ, [13, false])

            _KernelInputQueue.enqueue('c')
            _KernelInputQueue.enqueue('r')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue('a')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue(' ')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue('s')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('1')
            TSOS.Kernel.prototype.krnInterruptHandler(KEYBOARD_IRQ, [13, false])

            _KernelInputQueue.enqueue('r')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue('a')
            _KernelInputQueue.enqueue('d')
            _KernelInputQueue.enqueue(' ')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue('s')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('1')
            TSOS.Kernel.prototype.krnInterruptHandler(KEYBOARD_IRQ, [13, false])

            _KernelInputQueue.enqueue('w')
            _KernelInputQueue.enqueue('r')
            _KernelInputQueue.enqueue('i')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue(' ')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue('s')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue(' ')
            _KernelInputQueue.enqueue('"')
            _KernelInputQueue.enqueue('"')
            TSOS.Kernel.prototype.krnInterruptHandler(KEYBOARD_IRQ, [13, false])

            _KernelInputQueue.enqueue('r')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue('a')
            _KernelInputQueue.enqueue('d')
            _KernelInputQueue.enqueue(' ')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue('s')
            _KernelInputQueue.enqueue('t')
            TSOS.Kernel.prototype.krnInterruptHandler(KEYBOARD_IRQ, [13, false])
        }, 20000)

        setTimeout(() => {
            _KernelInputQueue.enqueue('c')
            _KernelInputQueue.enqueue('r')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue('a')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue(' ')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue('s')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('1')
            TSOS.Kernel.prototype.krnInterruptHandler(KEYBOARD_IRQ, [13, false])

            _KernelInputQueue.enqueue('l')
            _KernelInputQueue.enqueue('s')
            TSOS.Kernel.prototype.krnInterruptHandler(KEYBOARD_IRQ, [13, false])

            _KernelInputQueue.enqueue('d')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue('l')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue(' ')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue('s')
            _KernelInputQueue.enqueue('t')
            TSOS.Kernel.prototype.krnInterruptHandler(KEYBOARD_IRQ, [13, false])

            _KernelInputQueue.enqueue('l')
            _KernelInputQueue.enqueue('s')
            TSOS.Kernel.prototype.krnInterruptHandler(KEYBOARD_IRQ, [13, false])

            _KernelInputQueue.enqueue('r')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue('a')
            _KernelInputQueue.enqueue('d')
            _KernelInputQueue.enqueue(' ')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue('s')
            _KernelInputQueue.enqueue('t')
            TSOS.Kernel.prototype.krnInterruptHandler(KEYBOARD_IRQ, [13, false])

            _KernelInputQueue.enqueue('w')
            _KernelInputQueue.enqueue('r')
            _KernelInputQueue.enqueue('i')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue(' ')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue('s')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue(' ')
            _KernelInputQueue.enqueue('"')
            _KernelInputQueue.enqueue('h')
            _KernelInputQueue.enqueue('i')
            _KernelInputQueue.enqueue('"')
            TSOS.Kernel.prototype.krnInterruptHandler(KEYBOARD_IRQ, [13, false])

            _KernelInputQueue.enqueue('d')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue('l')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue(' ')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue('s')
            _KernelInputQueue.enqueue('t')
            TSOS.Kernel.prototype.krnInterruptHandler(KEYBOARD_IRQ, [13, false])
        }, 23000)

        setTimeout(() => {
            _KernelInputQueue.enqueue('w')
            _KernelInputQueue.enqueue('r')
            _KernelInputQueue.enqueue('i')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue(' ')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue('s')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('1')
            _KernelInputQueue.enqueue(' ')
            _KernelInputQueue.enqueue('"')
            _KernelInputQueue.enqueue('h')
            _KernelInputQueue.enqueue('i')
            _KernelInputQueue.enqueue('"')
            TSOS.Kernel.prototype.krnInterruptHandler(KEYBOARD_IRQ, [13, false])

            _KernelInputQueue.enqueue('r')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue('n')
            _KernelInputQueue.enqueue('a')
            _KernelInputQueue.enqueue('m')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue(' ')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue('s')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('1')
            _KernelInputQueue.enqueue(' ')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue('s')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('2')
            TSOS.Kernel.prototype.krnInterruptHandler(KEYBOARD_IRQ, [13, false])

            _KernelInputQueue.enqueue('l')
            _KernelInputQueue.enqueue('s')
            TSOS.Kernel.prototype.krnInterruptHandler(KEYBOARD_IRQ, [13, false])

            _KernelInputQueue.enqueue('r')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue('a')
            _KernelInputQueue.enqueue('d')
            _KernelInputQueue.enqueue(' ')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue('s')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('1')
            TSOS.Kernel.prototype.krnInterruptHandler(KEYBOARD_IRQ, [13, false])

            _KernelInputQueue.enqueue('r')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue('a')
            _KernelInputQueue.enqueue('d')
            _KernelInputQueue.enqueue(' ')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue('s')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('2')
            TSOS.Kernel.prototype.krnInterruptHandler(KEYBOARD_IRQ, [13, false])
        }, 27000)

        setTimeout(() => {
            _KernelInputQueue.enqueue('f')
            _KernelInputQueue.enqueue('o')
            _KernelInputQueue.enqueue('r')
            _KernelInputQueue.enqueue('m')
            _KernelInputQueue.enqueue('a')
            _KernelInputQueue.enqueue('t')
            TSOS.Kernel.prototype.krnInterruptHandler(KEYBOARD_IRQ, [13, false])

            for (let i = 0; i <= 62; i++) {
                _KernelInputQueue.enqueue('c')
                _KernelInputQueue.enqueue('r')
                _KernelInputQueue.enqueue('e')
                _KernelInputQueue.enqueue('a')
                _KernelInputQueue.enqueue('t')
                _KernelInputQueue.enqueue('e')
                _KernelInputQueue.enqueue(' ')
                _KernelInputQueue.enqueue('t')
                _KernelInputQueue.enqueue('e')
                _KernelInputQueue.enqueue('s')
                _KernelInputQueue.enqueue('t')
                _KernelInputQueue.enqueue(i.toString())
                TSOS.Kernel.prototype.krnInterruptHandler(KEYBOARD_IRQ, [13, false])
            }

            _KernelInputQueue.enqueue('c')
            _KernelInputQueue.enqueue('o')
            _KernelInputQueue.enqueue('p')
            _KernelInputQueue.enqueue('y')
            _KernelInputQueue.enqueue(' ')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue('s')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('1')
            _KernelInputQueue.enqueue(' ')
            _KernelInputQueue.enqueue('j')
            _KernelInputQueue.enqueue('O')
            _KernelInputQueue.enqueue('S')
            _KernelInputQueue.enqueue('h')
            TSOS.Kernel.prototype.krnInterruptHandler(KEYBOARD_IRQ, [13, false])
        }, 30000)

        setTimeout(() => {
            _KernelInputQueue.enqueue('d')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue('l')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue(' ')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue('s')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('0')
            TSOS.Kernel.prototype.krnInterruptHandler(KEYBOARD_IRQ, [13, false])

            let stringToWrite = 'write test1 "' + 'A'.repeat(60 * 200) + '"'
            for (let i = 0; i < stringToWrite.length; i++) {
                _KernelInputQueue.enqueue(stringToWrite.charAt(i))
            }
            TSOS.Kernel.prototype.krnInterruptHandler(KEYBOARD_IRQ, [13, false])

            _KernelInputQueue.enqueue('c')
            _KernelInputQueue.enqueue('o')
            _KernelInputQueue.enqueue('p')
            _KernelInputQueue.enqueue('y')
            _KernelInputQueue.enqueue(' ')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue('s')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('1')
            _KernelInputQueue.enqueue(' ')
            _KernelInputQueue.enqueue('j')
            _KernelInputQueue.enqueue('O')
            _KernelInputQueue.enqueue('S')
            _KernelInputQueue.enqueue('h')
            TSOS.Kernel.prototype.krnInterruptHandler(KEYBOARD_IRQ, [13, false])
        }, 33000)

        setTimeout(() => {
            let stringToWrite = 'write test1 "' + 'A'.repeat(60 * 100) + '"'
            for (let i = 0; i < stringToWrite.length; i++) {
                _KernelInputQueue.enqueue(stringToWrite.charAt(i))
            }
            TSOS.Kernel.prototype.krnInterruptHandler(KEYBOARD_IRQ, [13, false])

            _KernelInputQueue.enqueue('c')
            _KernelInputQueue.enqueue('o')
            _KernelInputQueue.enqueue('p')
            _KernelInputQueue.enqueue('y')
            _KernelInputQueue.enqueue(' ')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('e')
            _KernelInputQueue.enqueue('s')
            _KernelInputQueue.enqueue('t')
            _KernelInputQueue.enqueue('1')
            _KernelInputQueue.enqueue(' ')
            _KernelInputQueue.enqueue('j')
            _KernelInputQueue.enqueue('O')
            _KernelInputQueue.enqueue('S')
            _KernelInputQueue.enqueue('h')
            TSOS.Kernel.prototype.krnInterruptHandler(KEYBOARD_IRQ, [13, false])
        }, 36000)
    }
}
