# Ecomonitor

## 📌 Sobre o Projeto

Ecomonitor é um aplicativo desenvolvido em **React Native** com **Expo Router**, focado em monitoramento e análise ambiental. O projeto usa diversas bibliotecas para gerenciar interfaces, navegação e funcionalidades específicas.

### 📌 Sobre o Expo

O **Expo** é um framework e uma plataforma para aplicações **React Native**, que facilita o desenvolvimento, teste e distribuição de aplicativos móveis. Ele permite que você execute seu aplicativo rapidamente sem precisar configurar um ambiente nativo complexo.

---

## 🚀 Instalação e Configuração

### 📦 1. Pré-requisitos

Antes de começar, você precisará ter instalado em seu sistema:

- **Node.js** (Recomendado: versão LTS) → [Baixar Node.js](https://nodejs.org/)
- **Yarn** (Gerenciador de pacotes) → [Baixar Yarn](https://yarnpkg.com/getting-started/install)
- **Expo CLI** e **EAS CLI** (Ferramentas de desenvolvimento Expo) → Instalar com:
  ```sh
  npx expo install -g expo-cli eas-cli
  ```
- **Android Studio** (Para emulador Android) ou **Xcode** (Para iOS)
- **Dispositivo físico** com **Expo Go** instalado ([Android](https://play.google.com/store/apps/details?id=host.exp.exponent) | [iOS](https://apps.apple.com/app/expo-go/id982107779))

---

### 🛠️ 2. Configurando Expo e EAS

Após instalar o **Expo CLI** e o **EAS CLI**, você precisará configurar sua conta Expo para usar os serviços da plataforma:

1. Faça login no Expo:
   ```sh
   npx expo login
   ```
2. Faça login no EAS:
   ```sh
   npx eas login
   ```
3. Se precisar reconfigurar o **EAS/Expo**, será necessário criar uma conta no Expo ([expo.dev](https://expo.dev/)).

> **⚠️ Importante:** Caso tenha problemas para conectar o app no celular, o erro está quase sempre no arquivo `eas.json`. Verifique se a configuração está correta.

---

### 📥 3. Instalando as Dependências

1. Clone este repositório:
   ```sh
   git clone https://github.com/seu-usuario/ecomonitor.git
   ```
2. Acesse o diretório do projeto:
   ```sh
   cd ecomonitor
   ```
3. Instale as dependências:
   ```sh
   yarn install
   ```

Se houver problemas com pacotes desatualizados, remova `node_modules` e `yarn.lock` e reinstale:

```sh
rm -rf node_modules yarn.lock
yarn install
```

---

### ▶️ 4. Rodando o Projeto

Para iniciar o aplicativo, execute:

```sh
npx expo start
```

Esse comando abrirá o **Metro Bundler** e exibirá um QR Code. Para testar no celular:

1. Abra o **Expo Go** no seu dispositivo.
2. Escaneie o QR Code com a câmera do celular.
3. O app será carregado automaticamente no Expo Go.

Para rodar diretamente no **Android**:

```sh
npx expo start --android
```

Para rodar no **iOS** (MacOS com Xcode):

```sh
npx expo start --ios
```

Para rodar no **navegador**:

```sh
npx expo start --web
```
