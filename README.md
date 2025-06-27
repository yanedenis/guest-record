# Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

After running the command, you'll see options to open the app in:

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## This project uses third-party library - [Picker](https://docs.expo.dev/versions/latest/sdk/picker/)

You can find Picker components in the `@/components/GuestModal.tsx`:

```bash
<Picker selectedValue={gender} onValueChange={value => setGender(value)} style={styles.picker}>
  <Picker.Item label="Выберите пол" value="" />
  <Picker.Item label="Мужской" value="Male" />
  <Picker.Item label="Женский" value="Female" />
</Picker>
```

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.
