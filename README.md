# Portfólio Profissional — Matheus Rodrigues

Landing page de portfólio com visual moderno, estrutura escalável e seções focadas em apresentação técnica, projetos publicados e vitrine de dashboards Power BI.

## O que foi implementado

- Hero centralizado com área dedicada à foto profissional;
- Seção de projetos com os links exigidos;
- Galeria com **3 espaços prontos** para imagens de dashboards;
- Tipografia premium e design system com cores, sombras e componentes reutilizáveis;
- Animações de entrada suaves com JavaScript puro e `IntersectionObserver`;
- Layout totalmente responsivo para desktop, tablet e mobile.

## Links dos projetos (mantidos)

- Projeto Serralheria: https://matheusszr.github.io/SerralheriaFrontEnd/index.html
- Projeto InspiraAgora: https://matheusszr.github.io/InspiraAgora/

## Estrutura de arquivos

```bash
.
├── assets/
│   ├── dashboard-01.svg
│   ├── dashboard-02.svg
│   ├── dashboard-03.svg
│   └── profile-placeholder.svg
├── index.html
├── script.js
├── style.css
└── README.md
```

## Como trocar as imagens (rápido)

1. Substitua `assets/profile-placeholder.svg` pela sua foto.
2. Substitua `assets/dashboard-01.svg`, `assets/dashboard-02.svg` e `assets/dashboard-03.svg` pelos prints dos seus painéis.
3. Mantenha os mesmos nomes de arquivo ou atualize os caminhos no `index.html`.

## Execução local

```bash
python3 -m http.server 8000
```

Abra `http://127.0.0.1:8000` no navegador.
