function fetchByJson() {
  $.getJSON("team.json", function (result) {
    const members = result.members;
    $.each(members, function (i, obj) {
      $("#team").append(
        `<h2>${obj.name}</h2>`,
        `<h5>${obj.position}</h5>`,
        `<p>${obj.bio}</p>`
      );
    });
  });
}

function fetchByAjax() {
  $.ajax({
    url: "team.json",
    type: "GET",
    beforeSend: function () {
      $("#team").text("Loading...");
    },
    success: function (result) {
      setTimeout(() => {
        $("#team").html("");
        const members = result.members;
        $.each(members, function (i, obj) {
          $("#team").append(
            `<h2>${obj.name}</h2>`,
            `<h5>${obj.position}</h5>`,
            `<p>${obj.bio}</p>`
          );
        });
      }, 3000);
    },
    error: function () {
      $("#team").text("Content could not be retrieved");
    },
  });
}

$(document).ready(function () {
  fetchByAjax();
  // fetchByJson();
});
