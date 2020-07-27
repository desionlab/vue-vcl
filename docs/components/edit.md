# Edit

## VclEdit <Badge text="beta" type="warning"/>

This component works in tandem with the "[VeeValidate](https://logaretm.github.io/vee-validate/)" library.

> The "[VeeValidate](https://logaretm.github.io/vee-validate/)" library must be connected and configured to the project.

### Basic

<ClientOnly>
  <div class="vcl-example">
    <VclEdit label="Demo edit" placeholder="Demo placeholder" />
  </div>
</ClientOnly>

```html
<templayte>
  <div>
    <VclEdit label="Demo edit" placeholder="Demo placeholder" />
  </div>
</templayte>
```

### Advanced

<ClientOnly>
  <div class="vcl-example">
    <ValidationObserver tag="form">
      <VclEdit v-model="model.username" v-bind="form.username" />
      <VclEdit v-model="model.password" v-bind="form.password" />
    </ValidationObserver>
  </div>
</ClientOnly>

```html
<templayte>
  <div>
    <ValidationObserver tag="form">
      <VclEdit v-model="model.username" v-bind="form.username" />
      <VclEdit v-model="model.password" v-bind="form.password" />
    </ValidationObserver>
  </div>
</templayte>

<script>
  export default {
    data() {
      return {
        model: {
          username: '',
          password: ''
        },
        form: {
          username: {
            type: 'email',
            label: 'Login',
            placeholder: 'example@mail.com',
            validation: {
              name: 'Login',
              rules: {
                required: true,
                email: true,
                min: 8,
                max: 56
              }
            }
          },
          password: {
            type: 'password',
            label: 'Password',
            placeholder: '********',
            validation: {
              name: 'Password',
              rules: {
                required: true,
                min: 8,
                max: 56
              }
            }
          }
        }
      };
    }
  };
</script>
```

<script>
export default {
  data() {
    return {
      model: {
        username: '',
        password: ''
      },
      form: {
        username: {
          type: 'email',
          label: 'Login',
          placeholder: 'example@mail.com',
          validation: {
            name: 'Login',
            rules: {
              required: true,
              email: true,
              min: 8,
              max: 56
            }
          }
        },
        password: {
          type: 'password',
          label: 'Password',
          placeholder: '********',
          validation: {
            name: 'Password',
            rules: {
              required: true,
              min: 8,
              max: 56
            }
          }
        }
      }
    }
  }
}
</script>
