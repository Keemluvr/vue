// props
const ListaProdutos = {
  name: "ListaProdutos",
  props: ["produtos"],
  template: `
      <ul>
        <li v-for="produto in produtos">{{produto}}</li>
      </ul>
    `,
};



const vm = new Vue({
  el: "#app",
  data: {
    listaItens: ["Item 1", "Item 2"],
  },
  components: {
    ListaProdutos,
  },
});



//componente para componente
const DadosCurso = {
  name: "DadosCurso",
  props: ["curso"],
  template: `
      <p>Nome do curso: {{curso}}</p>
    `,
};



const ListaCursos = {
  name: "ListaCursos",
  data() {
    return {
      cursos: ["html", "css", "javascript", "vue"],
    };
  },
  components: {
    DadosCurso,
  },
  template: `
      <ul>
        <dados-curso 
          v-for="curso in cursos"
          :curso="curso"
          :key="curso"
        ></dados-curso>
      </ul>
    `,
};



const vm2 = new Vue({
  el: "#app2",
  components: {
    ListaCursos,
  },
});



// mais de uma prop
const BlogPost = {
  name: "BlogPost",
  props: ["titulo", "texto", "likes"],
  template: `
    <article>
      <h1>{{titulo}}</h1>
      <p>{{texto}}</p>
      <span>{{likes}}</span>
    </article>
    `,
};



const vm3 = new Vue({
  el: "#app3",
  data: {
    blog: {
      titulo: "Nova Postagem",
      texto: "Esse é o texto completo",
      data: "23/12",
      likes: 100,
    },
  },
  components: {
    BlogPost,
  },
});



// estática vs dinâmica
const BlogPost2 = {
  name: "BlogPost2",
  props: ["titulo", "texto", "likes", "tags"],
  template: `
    <article>
      <h1>{{titulo}}</h1>
      <p>{{texto}}</p>
      <span>{{likes}}</span>
    </article>
    `,
};



const vm4 = new Vue({
  el: "#app4",
  data: {
    blog: {
      titulo: "Nova Postagem",
      texto: "Esse é o texto completo",
      data: "23/12",
      likes: 100,
    },
  },
  components: {
    BlogPost2,
  },
});



// validação
const BlogPost3 = {
  name: "BlogPost3",
  props: {
    titulo: String,
    likes: Number,
    tags: {
      type: Array,
      required: true,
    },
    thumb: {
      type: String,
      default: "./img/img.png",
    },
  },
};



// one way data flow
// Não recomendado, vue indicará um erro
const BlogPost4 = {
  props: ["contador"],
  template: `
    <article>
      <button @click="contador++">Adicionar {{contador}}</button>
    </article>
    `,
};



const vm5 = new Vue({
  el: "#app5",
  data: {
    contador: 0,
  },
  components: {
    BlogPost4,
  },
});

// exercício
const dadosAcao = {
  name: "dadosAcao",
  props: ['acao'],
  template: `
    <ul>
      <li v-for="(dado, chave) in acao">
        {{chave}}: {{dado}}
      </li>
    </ul>
  `,

}

const formularioAcoes = {
  name: "formularioAcoes",
  components: {
    dadosAcao
  },
  data() {
    return {
      simbolo: "",
      quote: {}
    }
  },
  // props: 
  template: `
    <div>
      <input type="text" v-model="simbolo"></input>
      <button @click="puxarAcao">Puxar</button>
      <dados-acao :acao="quote"></dados-acao>
    </div>
  `,
  methods: {
    puxarAcao() {
      fetch(`https://api.iextrading.com/1.0/stock/${this.simbolo}/quote`)
      .then( r => r.json())
      .then( r => {
        this.quote = r
      })
    }
  },
}

const vm6 = new Vue({
  el: "#app6",
  data: {

  }, 
  components: {
    formularioAcoes
  }
})