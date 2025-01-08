window.onload = function () {
            const rotatingImages = document.querySelectorAll('.rotating-images img');
            const totalImages = rotatingImages.length;
            const radius = 120; // Circle radius

            rotatingImages.forEach((img, index) => {
                const angle = (2 * Math.PI * index) / totalImages; // Calculate angle
                const x = Math.cos(angle) * radius; // X position
                const y = Math.sin(angle) * radius; // Y position

                img.style.left = `${50 + x / 3}%`; // Adjust X position
                img.style.top = `${50 + y / 3}%`; // Adjust Y position
                img.style.transform = 'translate(-50%, -50%)'; // Center align
            });
        };

        let rotatingContainer;
        let selectedNumber = null;
        let selectedImage = null;
        let clickDisabled = false; // Prevent multiple clicks

        function stopRotation() {
            if (clickDisabled) return;

            clickDisabled = true;
            rotatingContainer = document.getElementById('rotatingImages');
            rotatingContainer.style.animationPlayState = 'paused';

            selectedNumber = Math.floor(Math.random() * 7) + 1; // Random number between 1 and 7
            selectedImage = document.getElementById(`img${selectedNumber}`);

            if (selectedImage) {
                document.querySelectorAll(".rotating-images img").forEach((img) => {
                    img.style.display = 'none';
                });

                const label = document.createElement('div');
                label.textContent = selectedNumber;
                label.style.position = 'absolute';
                label.style.top = selectedImage.style.top;
                label.style.left = selectedImage.style.left;
                label.style.transform = selectedImage.style.transform;
                label.style.fontSize = '18px';
                label.style.color = 'red';
                label.style.fontWeight = 'bold';
                label.style.transformOrigin = 'center';
                rotatingContainer.appendChild(label);
            }

            // Show buttons after the center image is clicked
            document.getElementById('buttonsContainer').classList.remove('hidden');
        }

        function showAnswer() {
            if (selectedNumber) {
                document.querySelectorAll("[id]").forEach((el) => el.classList.add("hidden"));
                document.getElementById(["one", "two", "three", "four", "five", "six", "seven"][selectedNumber - 1]).classList.remove("hidden");

                // Ensure buttons remain visible
                document.getElementById('buttonsContainer').classList.remove('hidden');
            } else {
                alert("कृपया पहले बीच वाली इमेज पर क्लिक करें।");
            }
        }
