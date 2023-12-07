<!DOCTYPE html>
<html>
    <head>
        <title>Dashboard</title>
        <style>
            body{margin: auto;height: 100%;background-color: #ececec;}
            html{height: 100%;}
            .btn-options{border: none;padding: 15px;width:80%;cursor:pointer;font-weight: bold;}
            .btn-options:hover{background-color: darkseagreen !important;}

            table{padding: 10px;margin-left: auto;margin-right: auto;}
            table tr td{height: 100px;width: 100px;padding: 15px;cursor: pointer;}
            table tr td:hover{background-color: pink;}
            .lbltxt{display:block;height:inherit;overflow: hidden;text-overflow: ellipsis;line-height: 100px}
        </style>

    </head>
    <body>
        <!--Results -->
    <div id="results"  style="overflow:hidden;position:relative;float:left;border:1px solid #000;width:19%;height:98%;text-align:center;margin-right:10px">
            <h3>Results</h3>
            <hr/>
<!--  
            <div onmousedown='mousedownCOLOR(this)' class="results-item" style="width: 90%;margin:auto" id="test">
                <span style="float: left;">[O]</span>
                <span style="float: right">Flower</span>
                <span style="display: block;clear:both">--- 50$ ---</span>
            </div>
            -->
            <hr style="width: 70%;"/>
<div id="showHERE" style="overflow-x:hidden;overflow-y: scroll;height:75%">


</div>
            

<div id="end" style="position: absolute;bottom:0;width:100%">
    <button value="printoption"style="background:none;border:1px solid #000;padding:20px;width:100%" onclick="done(this)">complete</button>
</div>


    </div>

        <span style="clear: both;"></span>



        <!--Main Menu-->
        <div style="float: left;border:2px solid #000;width:60%;height:95%;text-align:center">
            <h2>Main Menu</h2>
            <div id="mainmenu" style="overflow-y: scroll;height:inherit;">
                <table border="1px">
                    <tr>
                        <td><span class="lbltxt" data-name="Chocolate" data-price="50" data-itemid="1" onclick="detailme(this.getAttribute('data-name'),this.getAttribute('data-price'),this.getAttribute('data-itemid'))">Chocolate</span></td>


                        <td><span class="lbltxt"  data-name="test" data-price="40" onclick="detailme(this.getAttribute('data-name'),this.getAttribute('data-price'))">Cheese</span></td>
                        <td><span class="lbltxt">Water</span></td>
                        <td><span class="lbltxt">Milk</span></td>
                        <td><span class="lbltxt">Donut</span></td>
                        <td><span class="lbltxt">Lemon</span></td>
                    </tr>
                    <tr>
                        <td><span class="lbltxt">Caramel</span></td>
                        <td><span class="lbltxt">Tomato</span></td>
                        <td><span class="lbltxt">Flower</span></td>
                        <td><span class="lbltxt">Oil</span></td>
                        <td><span class="lbltxt">Biscuit</span></td>
                        <td><span class="lbltxt">Pizza</span></td>
                    </tr>
                    <tr>
                        <td><span class="lbltxt">Meat</span></td>
                        <td><span class="lbltxt">Sandwish</span></td>
                        <td><span class="lbltxt">Bread</span></td>
                        <td><span class="lbltxt">Eggs</span></td>
                        <td><span class="lbltxt">Seafood</span></td>
                        <td><span class="lbltxt">Cream</span></td>
                    </tr>
                    <tr>
                        <td><span class="lbltxt">Yogurt</span></td>
                        <td><span class="lbltxt">Butter</span></td>
                        <td><span class="lbltxt">Apple</span></td>
                        <td><span class="lbltxt">Orange</span></td>
                        <td><span class="lbltxt">Peach</span></td>
                        <td><span class="lbltxt">Banana</span></td>
                    </tr>

                    <tr>
                        <td><span class="lbltxt">Pear</span></td>
                        <td><span class="lbltxt">Watermelon</span></td>
                        <td><span class="lbltxt">Mango</span></td>
                        <td><span class="lbltxt">Cherry</span></td>
                        <td><span class="lbltxt">Raspberry</span></td>
                        <td><span class="lbltxt">Pineapple</span></td>
                    </tr>

                </table>
            </div>

            <div id="printoption" style="display: none;">
            <p style="font-size: 30px;">Completing The Order</p>
            </div>


            <div id="settings" style="display: none;">
            <p style="font-size: 30px;">S E T T I N G S</p>

            </div>
        </div>




        <!--Options-->
        <div id="optionsdiv"style="float: right;border:1px solid #000;width:19%;height:98%;text-align:center">
            <h3 >Select Option</h3>
            <br/><br/>
            <button class="btn-options" onclick="done(this)"  id="btnmenu">Main Menu</button>
            <button class="btn-options" onclick="done(this)" value="settings" id="btnsettings">Settings</button>
        </div>



        <script src="script.js"></script>

    </body>
</html>