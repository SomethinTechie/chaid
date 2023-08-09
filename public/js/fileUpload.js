// Get a reference to the progress bar, wrapper & status label
var progress_wrapper = document.getElementById("progress_wrapper");
var progress_title = document.getElementById("progress-title")

// Get a reference to the 3 buttons
var upload_btn = document.getElementById("upload_btn");
var loading_btn = document.getElementById("loading_btn");
var input = document.getElementById("files");

// Get a reference to the alert wrapper
var alert_wrapper = document.getElementById("alert_wrapper");


var publisher = $("#publisher");
var dynamic_options = document.getElementById("category_type");
var dynamic_genre = document.getElementById("genre");
// var formSpace = $(".content-upload-form");
var category_options = document.getElementById("category-options");

// Function to show alerts
// function show_alert(message, alert) {
//     alert_wrapper.innerHTML = `
//     <div id="alert" class="ui-alert alert-${alert} alert-dismissible animated fadeInRight show" role="alert">
//       <span>${message}</span>
//     </div>
//   `;
// }


// Function to upload file
function upload(req) {
    var progress = document.getElementById("progress");
    var progress_status = document.getElementById("progress_status");
    var cancel_btn = document.getElementById("uploadActionButtton");
    console.log(progress_status)

    console.log(req.formId)
    $("#progress-title").html('Upload progress')
    $(".left-alert-btn").css({
        'display': 'none'
    })
    $(".left-alert-btn").css({
        'width': '100%'
    })

    // Reject if the file input is empty & throw alert
    if (input) {
        if (!input.value) {
            // show_alert("No file selected", "warning");

            return;
        }
    }

    // Create a new FormData instance
    var multiform = document.getElementById(`${req.formId}`);
    var data = new FormData(multiform);

    // Create a XMLHTTPRequest instance
    var request = new XMLHttpRequest();

    // Set the response type
    request.responseType = "json";

    // Clear any existing alerts
    if (alert_wrapper) {
        alert_wrapper.innerHTML = "";
    }

    // Disable the input during upload
    if (input) {
        input.disabled = true;
    }

    // Show the progress bar
    if (progress_wrapper) {
        progress_wrapper.classList.remove("d-none");
    }

    // Get a reference to the file
    if (input) {

        progress_title.innerHTML = `Uploading`
        const filenameList = Array.prototype.map.call(input.files, function(file) {
            return file;
        });
        filenameList.forEach(getFile);
    }



    function getFile(file) {
        var filename = file.name;
        var filesize = file.size;
        document.cookie = `filesize=${filesize}`;
    }



    // request progress handler
    request.upload.addEventListener("progress", function(e) {
        // Get the loaded amount and total filesize (bytes)
        var loaded = e.loaded;
        var total = e.total;

        // Calculate percent uploaded
        var percent_complete = (loaded / total) * 100;
        var offset_complete = (percent_complete / 100) * 427;
        var offset = 427 - offset_complete

        function bytesToMegabytes(bytes) {
            return bytes / (1024 * 1024);
        }

        const megabytes = bytesToMegabytes(total);
        const uploadedmegabytes = (percent_complete / 100) * megabytes

        if (Math.floor(total / 1000) < 1000) {
            $('#fileSize').html(`${Math.floor((percent_complete / 100) * (total / 1000))}Kb of ${Math.floor(total / 1000)}KB`)
        } else {
            $('#fileSize').html(`${uploadedmegabytes.toFixed(2)} MB of ${megabytes.toFixed(2)} MB`)
        }

        // Update the progress text and progress bar
        progress.setAttribute(
            "style", `stroke-dashoffset: ${Math.floor(offset)}`
        );
        progress_status.innerText = `${Math.floor(percent_complete)}%`;
    });

    request.addEventListener("load", function(e) {
        if (request.status == 200) {
            // show_alert(`${request.response.message}`, `${request.response.alert}`);
            $('#uploadActionButttonWrapper').html(`<a onclick="refreshPage()" href="#" class="std-btn bgw mt-4 moph-bg">${request.response.message}</a>`)
            $('#uploadStatus').html(request.response.status)
            $('#uploadFilesSize').css({
                'display': 'none'
            })
            // setTimeout(function() {
            //     location.reload();
            // }, 5000);
        } else {
            // show_alert(`Error uploading file`, "danger");
        }

        reset();
    });

    // request error handler
    request.addEventListener("error", function(e) {
        reset();
        // show_alert(`Error uploading file`, "warning");
    });
    // request abort handler
    request.addEventListener("abort", function(e) {
        reset();
        // show_alert(`Upload cancelled`, "primary");
    });

    cancel_btn.addEventListener("click", function() {
        request.abort();
        $('#uploadActionButttonWrapper').html(`<a onclick="refreshPage()" href="#" class="std-btn bgw mt-4 moph-bg">DONE</a>`)
        $('#uploadActionButtton').html(`DONE`)
        $('#uploadStatus').html('UPLOAD CANCELLED')
        $('#uploadFilesSize').css({
            'display': 'none'
        })
    });

    request.open("post", req.url);
    request.send(data);
}

// Function to update the input placeholder
function input_filename() {

    const filename = Array.prototype.map.call(input.files, function(file) {
        return file.name;
    });
}

function artwork_filename() {

    var artwork_input = document.getElementById("artwork_input");
    var artwork_input_label = document.getElementById("artwork_input_label");

    const artwork_name = Array.prototype.map.call(artwork_input.files, function(file) {
        return file.name;
    });
    artwork_input_label.innerText = artwork_name;

}

// Function to reset the
function reset() {
    if (input) {
        input.value = null;
        input.disabled = false;
    }
    // progress_wrapper.classList.add("d-none");
    // progress.setAttribute("style", `width: 0%`);
}