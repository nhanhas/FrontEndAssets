<?php 

    //Read from $_POST

?>

<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">

    <title>Detail</title>

    <!-- Bootstrap core CSS -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">

    <!-- App CSS -->
    <link href="styles/style.css" rel="stylesheet">

    <!-- Components CSS -->
    <link href="styles/product.css" rel="stylesheet">
    <link href="styles/navbar.css" rel="stylesheet">
</head>
<body>

    <!-- Products -->
    <div class="product" id="product-003"> 
        <header class="product-header">
            <div class="product-header-thumb background-blue">
                <!--image background -->
                <img src="http://sis.phc.pt/STOREWSV2/cimagem.aspx?id=u8882_tickets&version=2.00&imgName=img_0">
                <img id="{{product.id}}" src="http://sis.phc.pt/STOREWSV2/cimagem.aspx?id=u8882_tickets&version=2.00&imgName=img_0">

            </div>
        </header>
        <!-- Details -->
        <div class="product-info">          
            <div class="product-info-title">Ticket</div>
            <hr class="product-info-hr">
            <div class="product-info-description">Descricao do artigo, um pouco mais extenso que o habitual, so mesmo para ver no layout</div>                  
            <span class="product-info-price">200€</span>
        </div>
    </div>


<!-- Libs -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>



</body>
</html>