$(document).ready(function() {
    var isAudioPlaying = false;
    $('.form').submit(function(e) {
        e.preventDefault();

        const input = document.querySelector('input[type="text"]');
        
        // Show loading animation
        $('.loading').show();

        // Hide modal content initially
        $('#myModal .modal-content').hide();
        $('#galleryModal .modal-content').hide();

        // Simulate delay of 2 seconds
        setTimeout(function() {
            // Update modal content with input value
            $('#myModal .modal-content .nameJs').text(input.value);

            // Hide loading animation
            $('.loading').hide();

            // Show modal content
            $('#myModal .modal-content').show();

            // Display the modal
            $('#myModal').css('display', 'block');
        }, 2000);
    })

    $('.play').click(function() {
        // Check if the audio is currently playing
        if (isAudioPlaying) {
            // If it's playing, pause the audio
            document.getElementById('birthdayAudio').pause();
            // Update the flag
            isAudioPlaying = false;
            $('button i').removeClass('fa-pause').addClass('fa-play');
        } else {
            // If it's not playing, play the audio
            document.getElementById('birthdayAudio').play();
            // Update the flag
            isAudioPlaying = true;
            $('button i').removeClass('fa-play').addClass('fa-pause');
        
            // Delay before displaying the modal
            setTimeout(function() {
                // Show modal content
                $('#galleryModal .modal-content').show();
                // Display the modal
                $('#galleryModal').css('display', 'block');
            }, 3500); // 3500 milliseconds = 3.5 seconds
        }

        $('.close').click(function() {
            $('#galleryModal').css('display', 'none');
            document.getElementById('birthdayAudio').pause();
            // Update the flag
            isAudioPlaying = false;
            window.location.reload();
        });
        
    });

    // Event listener for when the audio ends
    $('#birthdayAudio').on('ended', function() {
        // Update the flag when the audio ends
        isAudioPlaying = false;
    });

    $('.close').click(function() {
        $('#myModal').css('display', 'none');
    });
});

const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");

    const swiperEl = document.querySelector("swiper-container");
    swiperEl.addEventListener("autoplaytimeleft", (e) => {
      const [swiper, time, progress] = e.detail;
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    });
