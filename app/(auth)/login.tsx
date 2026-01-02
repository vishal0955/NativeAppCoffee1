// // import { useLocalSearchParams, useRouter } from 'expo-router';
// // import { Button, KeyboardAvoidingView, Platform, Text, TextInput, View } from 'react-native';
// // import { useAuth } from '../../src/context/AuthContext';

// // export default function Login() {
// //   const { login } = useAuth();
// //   const router = useRouter();
// //   const { redirectTo } = useLocalSearchParams(); // useLocalSearchParams works in Expo Router

// //   const handleLogin = () => {
// //     login();
// //     router.replace(redirectTo || '/(app)/catalog'); // fallback if redirectTo missing
// //   };

// //   return (
// //     <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
// //        <KeyboardAvoidingView
// //         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
// //         style={{ flex: 1, justifyContent: 'center', padding: 20 }}
// //       >
// //       <Text>Email</Text>
// //       <TextInput style={{ borderWidth: 1, marginBottom: 12, padding: 8 }} />

// //       <Text>Name</Text>
// //       <TextInput style={{ borderWidth: 1, marginBottom: 12, padding: 8 }} />
// //       <Text>Password</Text>
// //       <TextInput secureTextEntry style={{ borderWidth: 1, marginBottom: 12, padding: 8 }} />
// //       <Button title="Login" onPress={handleLogin} />
// //       </KeyboardAvoidingView>
// //     </View>
// //   );
// // }



// import { useLocalSearchParams, useRouter } from 'expo-router';
// import {
//   Button,
//   Keyboard,
//   KeyboardAvoidingView,
//   Platform,
//   Pressable,
//   Text,
//   TextInput
// } from 'react-native';
// import { useAuth } from '../../src/context/AuthContext';

// export default function Login() {
//   const { login } = useAuth();
//   const router = useRouter();
//   const { redirectTo } = useLocalSearchParams();

//   const handleLogin = () => {
//     Keyboard.dismiss();   // ✅ hide keyboard
//     login();
//     router.replace(redirectTo || '/(app)/catalog');
//   };

//   return (
//     <Pressable style={{ flex: 1 }} onPress={Keyboard.dismiss}>
//       <KeyboardAvoidingView
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//         style={{ flex: 1, justifyContent: 'center', padding: 20 }}
//       >
//         <Text>Email</Text>
//         <TextInput style={{ borderWidth: 1, marginBottom: 12, padding: 8 }} />

//         <Text>Name</Text>
//         <TextInput style={{ borderWidth: 1, marginBottom: 12, padding: 8 }} />

//         <Text>Password</Text>
//         <TextInput
//           secureTextEntry
//           style={{ borderWidth: 1, marginBottom: 12, padding: 8 }}
//         />

//         <Button title="Login" onPress={handleLogin} />
//       </KeyboardAvoidingView>
//     </Pressable>
//   );
// }



import { useLocalSearchParams, useRouter } from 'expo-router';
import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
} from 'react-native';
import { useAuth } from '../../src/context/AuthContext';

export default function Login() {
  const { login } = useAuth();
  const router = useRouter();
  const { redirectTo } = useLocalSearchParams();

  const handleLogin = () => {
    Keyboard.dismiss();
    login();
    router.replace(redirectTo || '/(app)/catalog');
  };

  return (
    <Pressable style={{ flex: 1 }} onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
            padding: 20,
          }}
          keyboardShouldPersistTaps="handled"
        >
          <Text>Email</Text>
          <TextInput style={{ borderWidth: 1, marginBottom: 12, padding: 8 }} />

          <Text>Name</Text>
          <TextInput style={{ borderWidth: 1, marginBottom: 12, padding: 8 }} />

          <Text>Password</Text>
          <TextInput
            secureTextEntry
            style={{ borderWidth: 1, marginBottom: 12, padding: 8 }}
          />

          <Button title="Login" onPress={handleLogin} />
        </ScrollView>
      </KeyboardAvoidingView>
    </Pressable>
  );
}
