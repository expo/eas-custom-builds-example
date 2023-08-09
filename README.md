# EAS Build - custom build examples

## How to use this repo?

Example workflows are in **.eas/build**. They are associated with build profiles defined in **eas.json**.

- Run `npm install`.
- If you don't have access to the **exponent** account:
  - Open **app.config.js**.
  - Remove the `extra` and `owner` fields.
  - Run `eas init`.
- Run `eas build -p android -e PROFILE_NAME` where `PROFILE_NAME` is a profile name from **eas.json**
