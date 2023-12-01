import 'package:flutter/material.dart';
import 'package:flutter_project/page/Home.dart';
import 'package:flutter_project/page/Sample.dart';
import 'package:get/get.dart';

void main() async {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      initialRoute: '/',
      getPages: [
        GetPage(name: '/', page: () => Home()),
        GetPage(name: '/sample', page: () => Sample()),
      ],
    );
  }
}
