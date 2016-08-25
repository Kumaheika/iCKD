$(document).ready(function () {
  var $body = $('body');
  var $navBTN = $(".navBTN"); // Nav選單
  var $btn_create = $(".btn.btn-create"); //送出按鈕

  $('*[data-toggle="tooltip"]').tooltip();

  //animate function
  function anmation_Swing (where) {
    $body.animate({
      scrollTop: where
    }, 500, "swing");
  }

  //新建活動按鈕
  $btn_create.on("click", gotoCreate);
  function gotoCreate (e) {
    e.preventDefault();
    window.location.href = "create.html";
  }

  //互動視窗 - 活動名稱、報名人數
  $('#modal_input').on('show.bs.modal', function (e) {
    var modal = $(this);
    var button = $(e.relatedTarget); // Button that triggered the modal
    var recipient = button.data('whatever'); // Extract info from data-* attributes
    var $content = button.find('.end').text();
    modal.find('.modal_subtitle').text(recipient);
    modal.find('#modal_input_value').val($content);
  });

  //互動視窗 - 報名人員資訊
  $('#modal_people').on('show.bs.modal', function (e) {
    var modal = $(this);
    var button = $(e.relatedTarget); // Button that triggered the modal
    var recipient = button.data('whatever'); // Extract info from data-* attributes
    modal.find('.modal_subtitle').text(recipient);
  });


  //互動視窗 - 編輯報名人員
  var $btn_editprofile = $('a.modal_editprofile');
  $btn_editprofile.on("click", openEditModal);
  function openEditModal(e) {
    var $this = $(this);
    var modal = $('#modal_editprofile');
    var recipient = {
      company : $this.attr('data-company'),
      contact : $this.attr('data-contact'),
      dept : $this.attr('data-dept'),
      email : $this.attr('data-email'),
      tel : $this.attr('data-tel'),
      mobile : $this.attr('data-mobile'),
    };
    var modal_inp = {
      company : modal.find('input[name="company"]'),
      contact : modal.find('input[name="contact"]'),
      dept : modal.find('input[name="dept"]'),
      email : modal.find('input[name="email"]'),
      tel : modal.find('input[name="tel"]'),
      mobile : modal.find('input[name="mobile"]'),
    }
    modal_inp.company.val(recipient.company);
    modal_inp.contact.val(recipient.contact);
    modal_inp.dept.val(recipient.dept);
    modal_inp.email.val(recipient.email);
    modal_inp.tel.val(recipient.tel);
    modal_inp.mobile.val(recipient.mobile);
    modal.modal("toggle");
  }

  //互動視窗 - 刪除人員
  var $btn_del = $('a.modal_del');
  $btn_del.on("click", openDelModal);
  function openDelModal(e) {
    var $this = $(this);
    var recipient = $this.attr('data-person');
    var modal = $('#modal_del');
    var $subtitle = modal.find('.modal_subtitle');
    $subtitle.text(recipient);
    modal.modal("toggle");
  }

  //互動視窗 - 活動時間
  $('#modal_two').on('show.bs.modal', function (e) {
    var modal = $(this);
    var $subtitle = modal.find('.modal_subtitle'),
        $title_1 = modal.find('.sub_title_1'),
        $title_2 = modal.find('.sub_title_2'),
        $value1 = modal.find('#edit_startTime'),
        $value2 = modal.find('#edit_endTime');
    var button = $(e.relatedTarget); // Button that triggered the modal
    var recipient = button.data('whatever'); // Extract info from data-* attributes
    var $from = button.find('.from').text(),
        $end = button.find('.end').text(),
        $datasub1 = button.find('span.from').data('subtitle'),
        $datasub2 = button.find('span.end').data('subtitle');
    $subtitle.text(recipient);
    $title_1.text($datasub1);
    $title_2.text($datasub2);
    $value1.val($from);
    $value2.val($end);
  });

  //互動視窗 - 備註
  var $btn_notes = $('a.modal_notes');
  $btn_notes.on("click", openNotesModal);
  function openNotesModal(e) {
    var $this = $(this);
    var recipient = $this.attr('data-content');
    var modal = $('#modal_notes');
    var $value = modal.find('#modal_notes_value');
    $value.val(recipient);
    modal.modal("toggle");
  }

  //互動視窗 - 封存
  var $btn_stop = $('a.modal_stop');
  $btn_stop.on("click", openStopModal);
  function openStopModal(e) {
    var $this = $(this);
    var recipient = $this.attr('data-whatever');
    var modal = $('#modal_stop');
    var $subtitle = modal.find('.modal_subtitle');
    $subtitle.text(recipient);
    modal.modal("toggle");
  }

})
