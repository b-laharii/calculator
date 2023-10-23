<script>
        function appendToDisplay(value) {
            const display = document.getElementById('display');
            if (display.value === '0' && !isNaN(value)) {
                display.value = value;
            } else {
                display.value += value;
            }
        }

        function backspace() {
            const display = document.getElementById('display');
            display.value = display.value.slice(0, -1);
            if (display.value.length === 0) {
                display.value = '0';
            }
        }

        function clearDisplay() {
            document.getElementById('display').value = '0';
        }

        function calculateResult() {
            try {
                document.getElementById('display').value = eval(document.getElementById('display').value);
            } catch (error) {
                document.getElementById('display').value = 'Error';
            }
        }
    </script>
