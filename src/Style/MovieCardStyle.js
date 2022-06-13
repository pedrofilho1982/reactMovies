import styled from 'styled-components'

export const ImgHome = styled.img`
   width: 100%;
   height: 400px;
   object-fit: cover;
`

export const Icon = styled.a`
    border-radius: 30px;
    float: right;
    width: 40px;
    font-size: 1.3rem;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    background: #21dfcd;
    
    :hover{
        transform: rotate(360deg)scale(0.8);
    }
   
   
`

export const Navbar = styled.div`
h1{
    text-align: center;
    color: white;
    background-color: black;
    padding:10px;
    margin:0;
    
}
.navbar {
    display: flex;
    background: #2C3441;
    height: 40px;
    padding: 0;
    margin: 0;
    align-items: center;
    justify-content: space-between;
    border-radius: 40px;
    }

input{
    border-radius: 36px;
    background: white;
    height: 35px;
    border: none;
    font-size: 1.3rem;
    
}

.navbar a{
    text-decoration: none;
    color: inherit;
}

.list{
    list-style:none;
    display: flex;
    gap: 25px;
    color: white;
    font-size: 1.2rem;
    margin: 1.2rem;
   
}
#toggle, .navbar label {
    display: none;
    color: white;
    font-size: 1.3rem;
    
    
}

`