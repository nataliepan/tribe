<template lang="html">
  <div class="Login__Wrapper">
    <md-card class="Login__CardWrappper">
      <md-card-media class="Login__CardImage">
        <img src="../../assets/img/logo.png" alt="People">
      </md-card-media>

 <!-- If there is one or more queries loading -->
    <template v-if="loading > 0">
      Loading
    </template>
    <!-- Actual view -->
    <template v-else>
  
     <ul>
        <!-- Post list items -->

        <li v-for="post in viewer.sessions" >
          {{ post.title }} by
          {{ post._id }} {{ post.day }}
        </li>
      </ul> 
    </template>

      <md-card-content>
        <md-input-container :class="{'md-input-invalid': errors.has('email')}">
          <label>User</label>
          <md-input type="email"
            name="email"
            v-model="user"
            v-validate
            data-vv-name="email"
            data-vv-rules="required|email"></md-input>
          <span class="md-error">{{emailError}}</span>
        </md-input-container>

       <!--  <md-input-container :class="{'md-input-invalid': errors.has('cnpj')}">
          <label>CNPJ (exemplo de diretiva e validadores)</label>
          <md-input type="text"
            name="cnpj"
            v-model="cnpj"
            v-cnpj
            v-validate
            data-vv-name="cnpj"
            data-vv-rules="required|cnpj"></md-input>
          <span class="md-error">{{cnpjError}}</span>
        </md-input-container> -->

        <md-input-container>
          <label>Password</label>
          <md-input type="password"
            v-model="password"></md-input>
        </md-input-container>

      </md-card-content>

      <md-card-actions>
        <md-button>I forgot my password</md-button>
        <md-button class="md-raised md-primary"
          @click.stop="login">
          Login
        </md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script type="text/javascript">
import gql from 'graphql-tag';

  // GraphQL query
  const postsQuery = gql`
    query allPosts {
      viewer {
        sessions {
          day,
          title,
          speakers,
          slot
        }
      }
    }
  `;

  export default {
    created(){
   
          
    },
    data() {
      return {
        viewer: '',
        loading: 0,
        user: '',
        cnpj: '',
        password: '',
      };
    }, 
    // Apollo GraphQL
    apollo: {
      // Local state 'posts' data will be updated
      // by the GraphQL query result
      viewer: {
        // GraphQL query
        query: postsQuery,
        // Will update the 'loading' attribute
        // +1 when a new query is loading
        // -1 when a query is completed
        loadingKey: 'loading',
      },
    },
    components: {
      
    },
    computed: {
      cnpjError() {
        // Exemplo de computed properties
        return (this.errors) ? this.errors.first('cnpj') : '';
      },
      emailError() {
        // Exemplo de computed properties
        return (this.errors) ? this.errors.first('email') : '';
      },
    },
    methods: {
      login() {
        this.$router.push({ path: '/produtos' });
      },
    },
  };
</script>

<style lang="scss" scoped>
  .Login__Wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .Login__CardWrappper {
    margin-top: 20vh;
    min-width: 300px;
    width: 22%;
  }

  .Login__CardImage {
    display: flex;
    justify-content: center;
    img {
      max-width: 200px;
    }
  }
</style>
