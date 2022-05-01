
# Custom Checkbox Component in Angular

# English

[Em português](#português)

This is an experimental Angular customizable checkbox component that I made by copying some code from https://www.w3schools.com/howto/howto_css_custom_checkbox.asp.

## Usage

1. Copy the folder and its contents to your preferred path in the project.
2. Add the 'CustomCheckboxComponent' string to the 'declarations' in the 'app.module.ts' file.
3. As usual, remember to import the component from the proper file path. Most serious code editors will do this on their own.
4. In the parent template, use the tag `<app-custom-ckeckbox></app-custom-ckeckbox>` to insert the HTML element.
5. Use the attribute `label="(desired checkbox label)"` to rename your custom checkbox.
6. Use the attribute `(checkedState)="getCheckedState($event)"` to get the 'checked/unchecked' state in the parent component.
7. The HTML line will look like this:

```
<app-custom-checkbox label="(desired checkbox label)" (checkedState)="getCheckedState($event)"></app-custom-checkbox>
```

8. In the parent TS file, use the following:

```
export class ParentComponent {
  isChecked: boolean | undefined;

  getCheckedState(state: boolean) {
    this.isChecked = state;
  }
}
```

9.  Done. Now 'isChecked' reports as the true/false (checked/unchecked) state of that particular custom checkbox.

Lengthy and hardly very practical, I know, but I am still figuring out my way through this. Next step is finding a way to externally set the default true/false state. Actually, I already know how to do this, but can't get the SCSS part to act accordingly.
<br>
<br>
<br>

# Português

[In english](#english)

Este é um componente em Angular de caixa de seleção (checkbox) personalizável que eu fiz copiando alguns códigos de https://www.w3schools.com/howto/howto_css_custom_checkbox.asp.

## Uso

1. Copie a pasta e seu conteúdo para o local de sua preferência no projeto.
2. Adicione a linha 'CustomCheckboxComponent' às 'declarations' no arquivo 'app.module.ts'.
3. Como de costume, lembre-se de importar o componente do caminho correto. A maioria dos editores de código sérios fará isso por conta própria.
4. No template pai, use a tag `<app-custom-ckeckbox></app-custom-ckeckbox>` para inserir o elemento HTML.
5. Use o atributo `label="(rótulo da checkbox desejado)"` para renomear a sua checkbox customizável.
6. Use o atributo `(checkedState)="getCheckedState($event)"` para pegar o estado 'marcado/desmarcado' no componente pai.
7. A linha em HTML ficará assim:

```
<app-custom-checkbox label="(rótulo da checkbox desejado)" (checkedState)="getCheckedState($event)"></app-custom-checkbox>
```

8. No arquivo TS pai, use o seguinte:

```
export class ParentComponent {
  isChecked: boolean | undefined;

  getCheckedState(state: boolean) {
    this.isChecked = state;
  }
}
```

9. Pronto. Agora, 'isChecked' responde como o estado true/false (marcado/desmarcado) dessa checkbox personalizável em particular.

Demorado e não muito prático, eu sei, mas ainda estou descobrindo como fazer isso. O próximo passo é encontrar uma maneira de ajustar externamente o estado true/false padrão. Na verdade, eu já sei como fazer, mas não consigo fazer a parte do SCSS agir de acordo.
