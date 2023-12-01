import 'package:flutter/material.dart';
import 'package:get/get.dart';
// import 'package:flutter_inappwebview/flutter_inappwebview.dart';
import 'package:webview_flutter/webview_flutter.dart';
import 'package:fluttertoast/fluttertoast.dart';

class Home extends StatefulWidget {
  const Home({Key? key}) : super(key: key);

  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  final controller = WebViewController()
    ..setJavaScriptMode(JavaScriptMode.unrestricted)
    ..setBackgroundColor(const Color(0x00000000))
    ..setNavigationDelegate(
      NavigationDelegate(
        onProgress: (int progress) {},
        onPageStarted: (String url) {},
        onPageFinished: (String url) {},
        onWebResourceError: (WebResourceError error) {},
      ),
    )
    ..addJavaScriptChannel(
      'Print',
      onMessageReceived: (JavaScriptMessage message) {
        Fluttertoast.showToast(
          msg: message.message,
        );
      },
    )
    ..addJavaScriptChannel(
      'Redirect',
      onMessageReceived: (JavaScriptMessage message) {
        Get.toNamed('/sample');
      },
    )
    ..loadRequest(Uri.parse('http://192.168.0.89:3000'));

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Home'),
      ),
      body: SafeArea(
        child: Column(
          children: [
            Expanded(
              child: WebViewWidget(controller: controller),
            ),
            ElevatedButton(
              child: const Text('App Button'),
              onPressed: () async {
                controller.runJavaScript("handleClickAlert()");
              },
            )
          ],
        ),
      ),
    );
  }
}
