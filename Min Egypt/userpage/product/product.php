<!DOCTYPE html>
<html lang="en">


    <head>
        <meta charset="UTF-8">
        <meta http-equive="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Min Egpt</title>
        
        <link rel="shortcut icon" href="./images/egypt.png" type="image/sug+xml">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="stylesheet" href="./style.css">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Hedvig+Letters+Serif:opsz@12..24&family=Inter:wght@500&family=Ubuntu&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

</head>
<body>
<header>
            <div class="logo"><img src="">
            </div>
            <input type="checkbox" id="nav_check" hidden>
            <nav>
                <div class="logo">
                    <img src="./images/made.jpg">
                </div>
                <ul>
                    <li><a href="section.html" class="active">Home</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="./team.html">Our Team</a></li>
                    
                     <li><a href="interface.html" id="logout">logout</a></li>
                </ul>
            </nav>
            <label for="nav_check" class="hamburger">
                <div> </div>
                <div> </div>
                <div></div>
            </label>
        </header>
    <div class="container">
        <header1>
            <h1>STARVILLE</h1>
        </header1>

        <div class="card-container">
            <?php
            $servername = "localhost:3366";
            $username = "";
            $password = "";
            $dbname = "newegy";
            $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            $sql = "SELECT products.*, products_images.filename FROM products INNER JOIN products_images ON products.id = products_images.id";
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $products = $stmt->fetchAll(PDO::FETCH_ASSOC);

            foreach ($products as $product) {
                echo '<div class="card">';
                echo '<img src="' . $product["filename"] . '" alt="' . $product["name"] . '">';
                echo '<div class="product-details">';
                echo '<h3>' . $product["name"] . '</h3>';
                echo '<p>' . $product["description"] . '</p>';
                // يمكنك أيضاً إضافة مزيد من المعلومات الخاصة بالمنتج مثل السعر أو أي معلومات إضافية
                echo '</div>';
                echo '</div>';
            }
            ?>
        </div>
    </div>


<br><br><br>  <br><br>  <br><br>  <br><br>  <br><br>  <br><br>  <br><br>  <br><br> 
<footer class="footer">
    <div class="container">
        <div class="row">
            <div class="footer-col">
                <h4>Company</h4>
                <ul>
                    <li><a href="about.html">about us</a></li>
                    <li><a href="team.html">Our team</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Get help</h4>
                <ul>
                    <li><a href="privacy policy.html">privacy policy</a></li>
                <li><a href="feedback.html">Feed Back</a></li>
                <li><a href="question.html">Ask qeustion</a></li>

                </ul>
            </div>
            <div class="footer-col">
                <h4>Product</h4>
                <ul>
                    <li><a href="skincare.html">skin care</a></li>
                    <li><a href="grocery.html">grocery</a></li>
                    <li><a href="makeup.html">makeup</a></li>
                    <li><a href="resturant.html">resturant</a></li>
                    <li><a href="clothing.html">clothing brands</a></li>
                    <li><a href="clean.html">cleaning materials</a></li>
               
                </ul>
            </div>
            <div class="footer-col">
                <h4>Follow Us</h4>
                <div class="social-links">
                    <a href="https://www.facebook.com/groups/6699180616874641/?ref=share"><i class="fab fa-facebook-f"></i></a>
                    <a href="https://x.com/min_egypt?s=21"><i class="fab fa-twitter"></i></a>
                    <a href="https://www.instagram.com/min_egypt?igsh=NGVhN2U2NjQ0Yg=="><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </div>
</footer>

</body>
</html>