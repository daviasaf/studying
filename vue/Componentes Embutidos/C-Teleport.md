- Permite teleportar um componente que existe fora da hierarquia do ambiente do seu componente
- Sintaxe
    - \<Teleport to='bodyExample' > content <\/Teleport>
- É importa que o "to" já esteja no dom quando o teleport for montado
- Para desabilitar o teleporte, use o atributo disable
```html
<Teleport :disabled="isMobile">
  ...
</Teleport>
```
- Você pode fazer vários teleportes pro mesmo lugar tbm
- ver sobre **defer**