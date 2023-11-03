<script>
        document.getElementById("reservationForm").addEventListener("submit", function (event) {
            event.preventDefault();

            // Get form values
            const name = document.getElementById("name").value;
            const destination = document.getElementById("destination").value;
            const time = document.getElementById("time").value;
            const date = document.getElementById("date").value;
            const passengers = document.getElementById("passengers").value;
            const journey = document.getElementById("journey").value;
            const amount = document.getElementById("amount").value;

            // Display ticket information (Office Copy)
            document.getElementById("ticketName").textContent = name;
            document.getElementById("ticketDestination").textContent = destination;
            document.getElementById("ticketTime").textContent = time;
            document.getElementById("ticketDate").textContent = date;
            document.getElementById("ticketPassengers").textContent = destination;
            document.getElementById("ticketJourney").textContent = journey;
            document.getElementById("ticketAmount").textContent = amount;
            document.getElementById("ticket").style.display = "block";

            // Display cash collection receipt
            document.getElementById("receiptName").textContent = name;
            document.getElementById("receiptDestination").textContent = destination;
            document.getElementById("receiptTime").textContent = Time;
            document.getElementById("receiptDate").textContent = date;
            document.getElementById("receiptPassengers").textContent = passengers;
            document.getElementById("receiptJourney").textContent = journey;
            document.getElementById("receiptAmount").textContent = amount;
            document.getElementById("receipt").style.display = "block";

        });
    </script>

        <script>
            document.getElementById("reservationForm").addEventListener("submit", function (event) {
                event.preventDefault();

                // Display compartment copy information
                document.getElementById("compartmentName").textContent = name;
                document.getElementById("compartmentDestination").textContent = destination;
                document.getElementById("compartmentTime").textContent = time;
                document.getElementById("compartmentDate").textContent = date;
                document.getElementById("compartmentPassengers").textContent = passengers;
                document.getElementById("compartmentJourney").textContent = journey;
                document.getElementById("compartmentAmount").textContent = amount;
                document.querySelector('.compartment-copy').style.display = "block";

                // Display train conductor copy information
                document.getElementById("conductorName").textContent = name;
                document.getElementById("conductorDestination").textContent = destination;
                document.getElementById("conductorTime").textContent = time;
                document.getElementById("conductorDate").textContent = date;
                document.getElementById("conductorPassengers").textContent = passengers;
                document.getElementById("conductorJourney").textContent = journey;
                document.getElementById("conductorAmount").textContent = amount;
                document.querySelector('.conductor-copy').style.display = "block";
            });
        </script>
         <script>
            document.getElementById("reservationForm").addEventListener("submit", function(event) {
                event.preventDefault();

                // Get form values
                const name = document.getElementById("name").value;
                const destination = document.getElementById("destination").value;
                const time = document.getElementById("time").value;
                const date = document.getElementById("date").value;
                const passengers = document.getElementById("passengers").value;
                const journey = document.getElementById("journey").value;
                const amount = document.getElementById("amount").value;

                // Display ticket information (Office Copy)
                document.getElementById("ticketName").textContent = name;
                document.getElementById("ticketDestination").textContent = destination;
                document.getElementById("ticketTime").textContent = time;
                document.getElementById("ticketDate").textContent = date;
                document.getElementById("ticketPassengers").textContent = passengers; // Corrected variable name
                document.getElementById("ticketJourney").textContent = journey;
                document.getElementById("ticketAmount").textContent = amount;
                document.getElementById("ticket").style.display = "block";

                // Display cash collection receipt
                document.getElementById("receiptName").textContent = name;
                document.getElementById("receiptDestination").textContent = destination;
                document.getElementById("receiptTime").textContent = time; // Corrected variable name
                document.getElementById("receiptDate").textContent = date;
                document.getElementById("receiptPassengers").textContent = passengers;
                document.getElementById("receiptJourney").textContent = journey;
                document.getElementById("receiptAmount").textContent = amount;
                document.getElementById("receipt").style.display = "block";
            });
         </script>