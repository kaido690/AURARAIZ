/* CSS separado para AuraRaiz */

body{
    background-color: #ffffff;
    color: #E8A4B5;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 0;
}

header{ 
    background-color: #E8A4B5;
    color: #0b48f0; 
    height: 150px;
    padding-top: 10px; 
    text-align: center;
}

nav a{
    color: #0b48f0;
    font-weight: bold;
    text-decoration: none;
    margin: 0 10px;
}

/* Banner com homem estilo orgânico */
.banner{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 20px;
    background-color: #f7e5eb;
}

.banner img{
    width: 320px;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    margin-right: 25px;
}

.banner-text{
    max-width: 400px;
}

.banner-text h2{
    color: #ec708f;
    font-size: 28px;
}

.banner-text p{
    color: #0b48f0;
    font-size: 16px;
}

.banner-text button{
    background-color: #ec708f;
    color: white;
    border: none;
    padding: 12px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

/* Sessão produtos */
.produtos{
    text-align: center;
    padding: 40px 0;
}

.produtos h3{
    color: #0b48f0;
}

.cards{
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
}

.card{
    background-color: #fcebf0;
    border-radius: 15px;
    padding: 20px;
    width: 200px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.card img{
    width: 100%;
    border-radius: 10px;
}

footer{ 
    background-color: #ec708f;
    color: #0b48f0; 
    padding: 20px 0; 
    text-align: center;
    margin-top: 40px;
}

footer ul{
    list-style: none;
    padding: 0;
}

footer a{
    color: #0b48f0;
    text-decoration: none;
}
