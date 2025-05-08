<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="style.css">
    <title>Message</title>
  </head>
  <body>
    <div id="main">
        <?php 
            /** 
            * Validierung der Formulareingaben
            */
            function isValid($formdata)
            {
                foreach($formdata as $key => $value) {     
                    if(($key === 'anrede') && ($value !== 'Frau') && ($value !== 'Herr')) {  //Anrede muss Herr oder Frau sein   
                        return  false;
                    } elseif(($key === 'email') && (!filter_var($value, FILTER_VALIDATE_EMAIL))) { //E-Mail muss gültig sein
                            return false;
                    } else {
                        if(empty($value)) { //Felder dürfen nicht leer sein
                            return false;
                        }
                    }
                }

                return true;
            }

            //Aufbau der Message je nach Ergebnis der Validierung
            if(isValid($_POST)) {
                $message = "Vielen Dank, " . $_POST['vorname'] . ", wir haben deine Nachricht erhalten.";
                $class = "success";
            } else {
                $message = "Bitte füllen Sie alle Felder korrekt aus.";
                $class = "failed";
            } 
        ?>

        <div class="result" id="<?php echo htmlspecialchars($class); ?>">
            <?php 
                //Message wird ausgegeben
                echo "<p>" . print_r(htmlspecialchars($message),  true)."</p>"  
            ?>
        </div>
      

    </div>
  </body>
</html>

<?php 







