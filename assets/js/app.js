$(document).ready(function() {
    $('button').click(function (e) {
        e.preventDefault();
        let a11 = $("#a11").val();
        let a12 = $("#a12").val();
        let a13 = $("#a13").val();
        let a21 = $("#a21").val();
        let a22 = $("#a22").val();
        let a23 = $("#a23").val();

        let b11 = $("#b11").val();
        let b12 = $("#b12").val();
        let b13 = $("#b13").val();
        let b21 = $("#b21").val();
        let b22 = $("#b22").val();
        let b23 = $("#b23").val();
        let b31 = $("#b31").val();
        let b32 = $("#b32").val();
        let b33 = $("#b33").val();
        // let c11 = "("+a11+" x "+b11+") + ("+a12+" x "+b21+") + ("+a13+" x "+b31+")";
        // console.log(c11)
        $("#c11").val((a11*b11) + (a12*b21) + (a13*b31));
        $("#c12").val((a11*b12) + (a12*b22) + (a13*b32));
        $("#c13").val((a11*b13) + (a12*b23) + (a13*b33));
        $("#c21").val((a21*b11) + (a22*b21) + (a23*b31));
        $("#c22").val((a21*b12) + (a22*b22) + (a23*b32));
        $("#c23").val((a21*b13) + (a22*b23) + (a23*b33));
    });
});