const template = document.createElement("template");
template.innerHTML = `<style> 
                        #user{
                          font-family: 'Arial', sans-serif;
                              background: #f4f4f4;
                              width: 500px;
                              display: grid;
                              grid-template-columns: 1fr 2fr;
                              grid-gap: 10px;
                              margin-bottom: 15px;
                              border-bottom: #333333 3px solid;
                        }
                        #image{
                          width:100%
                        }
                        #cacher{
                          cursor:pointer;
                          background: red;
                          color: #fff;
                          border:0;
                          border-radius: 5px;
                          padding: 5px 10px
                        }
                      </style> 
                      <div id="user">
                        <img id="image" />
                        <div id="information">
                          <div id="show"> 
                            <h3 id="nom"></h3>
                            <p id="prenom"></p>
                            <p id="age"></p>
                          </div>
                          <button id="cacher"> Cacher </button>
                        </div>
                      </div>
                    `;

class Utilisateur extends HTMLElement {
  constructor() {
    super();
    this.show = true;

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.getElementById("nom").innerText = this.getAttribute("nom");
    this.shadowRoot.getElementById("prenom").innerText =
      this.getAttribute("prenom");

    /* this.shadowRoot.getElementById("email").innerText =
      this.getAttribute("email"); */
    this.shadowRoot.getElementById("age").innerText = this.getAttribute("age");

    this.shadowRoot.getElementById("image").src = this.getAttribute("photo");
  }

  cacher() {
    this.show = !this.show;
    let cacher = this.shadowRoot.getElementById("cacher");
    let informations = this.shadowRoot.getElementById("show");
    if (this.show) {
      informations.style.display = " block";
      cacher.style.background = "red";
      cacher.innerText = "Cacher";
    } else {
      informations.style.display = " none";
      cacher.style.background = "green";
      cacher.innerText = "Afficher";
    }
  }

  connectedCallback() {
    this.shadowRoot
      .getElementById("cacher")
      .addEventListener("click", () => this.cacher());
  }

  disconnectedCallback() {
    console.log("Élement supprimer");
  }

  attribueChangedCallback(name, oldValue, newValue) {}
}

window.customElements.define("affichage-utilisateur", Utilisateur);

// Récuperer les données de l'API https://randomuser.me/api ( à l'aide d'AJAX ou FETCH ou AXIOS ) -> console.log(donnée)
// name { first , last } , email , picture { large }
