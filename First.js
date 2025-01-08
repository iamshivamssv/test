const rotatingImages = document.querySelectorAll('.rotating-images img');
        const totalImages = rotatingImages.length;
        const radius = 120; // Circle radius

        // Arrange images in a circle
        rotatingImages.forEach((img, index) => {
            const angle = (2 * Math.PI * index) / totalImages; // Calculate angle
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            img.style.left = `${150 + x}px`; // Center point is 150px (half of 300px container)
            img.style.top = `${150 + y}px`; 
            img.style.transform = 'translate(-50%, -50%)'; 
        });

        let rotatingContainer;
        let selectedNumber = null;
        let clickDisabled = false;

        function stopRotation() {
            if (clickDisabled) return;

            clickDisabled = true;
            rotatingContainer = document.getElementById('rotatingImages');
            rotatingContainer.style.animationPlayState = 'paused';

            selectedNumber = Math.floor(Math.random() * 7) + 1; // Random number between 1 and 7

            // Hide all images except the selected one
            const selectedImage = document.getElementById(`img${selectedNumber}`);
            rotatingImages.forEach((img) => {
                img.style.display = 'none';
            });

            // Display the selected number in place of the rotating images
            const numberLabel = document.createElement('div');
            numberLabel.textContent = selectedNumber;
            numberLabel.style.position = 'absolute';
            numberLabel.style.top = selectedImage.style.top;
            numberLabel.style.left = selectedImage.style.left;
            numberLabel.style.transform = 'translate(-50%, -50%)';
            numberLabel.style.fontSize = '24px';
            numberLabel.style.color = 'red';
            numberLabel.style.fontWeight = 'bold';
            rotatingContainer.appendChild(numberLabel);

            // Show buttons
            document.getElementById('buttonsContainer').style.display = 'block';
        }

        function showAnswer() {
            if (!selectedNumber) {
                alert("कृपया पहले बीच वाली इमेज पर क्लिक करें।");
                return;
            }

            const answers = {
                1: "श्री राम आपको मार्गदर्शन देंगे। यह सही समय है अपने प्रयासों को दोगुना करने का।",
                2: "आपके जीवन में शांति और समृद्धि का आगमन होगा। धैर्य बनाए रखें।",
                3: "नया अवसर आपका इंतजार कर रहा है। विश्वास के साथ आगे बढ़ें।",
                4: "आपकी इच्छाएं जल्द ही पूरी होंगी। ईश्वर पर भरोसा रखें।",
                5: "आपके सामने कठिनाइयां आएंगी, लेकिन सफलता निश्चित है।",
                6: "यह समय आपके लिए बदलाव का संकेत देता है। सतर्क रहें।",
                7: "आपकी प्रार्थनाएं सुनी जा रही हैं। शुभ समाचार जल्द ही मिलेगा।"
            };

            const answerContainer = document.getElementById('answerContainer');
            answerContainer.textContent = `उत्तर: ${answers[selectedNumber]}`;
            answerContainer.style.display = 'block';
        }
