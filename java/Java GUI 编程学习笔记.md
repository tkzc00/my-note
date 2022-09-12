# Java GUI 编程

---

## GUI 编程简介

### 组件

- 窗口
- 弹窗
- 面板
- 文本框
- 列表框
- 按钮
- 图片
- 监听事件
- 鼠标
- 键盘事件
- 外挂
- 破解工具

### 简介

GUI 核心技术：

- Swing
- AWT

Java GUI 不流行的原因：

1. 界面不美观
2. 需要 jre 环境

### 为什么要学习Java GUI？

1. 可以写出自己心中想要的一些小工具
2. 工作的时候，可能需要维护到 Swing 界面（概率极小！）
3. 了解 MVC 架构，了解监听

## AWT

### AWT 介绍

1. 包含了很多的类和接口
2. GUI：图形用户界面编程
3. 元素：窗口、按钮、文本框
4. java.awt

![](https://i0.hdslb.com/bfs/album/874ec0384873b7a3e1484b72ad8e06376345393f.png)

### 组件和容器

#### 第一个窗口

```java
import java.awt.*;  
  
public class TestFrame {  
    public static void main(String[] args) {  
        Frame frame = new Frame("我的第一个Java图形界面窗口");  
  
        // 设置可见性  
        frame.setVisible(true);  
  
        // 设置窗口大小  
        frame.setSize(400, 400);  
  
        // 设置背景颜色  
        frame.setBackground(new Color(63, 218, 141));  
  
        // 弹出的初始位置  
        frame.setLocation(200, 200);  
  
        // 设置大小固定  
        frame.setResizable(false);  
    }  
}
```

效果：

![](https://i0.hdslb.com/bfs/album/37ca349331a1e91825e4fd6ea4c04ff4ba61be32.png)

问题：窗口无法关闭，只能停止Java程序运行！

#### 封装类以创建多个窗口

```java
import java.awt.*;  
  
public class TestFrame2 {  
    public static void main(String[] args) {  
        // 展示多个窗口  
        MyFrame myFrame1 = new MyFrame(100, 100, 200, 200, Color.blue);  
        MyFrame myFrame2 = new MyFrame(300, 100, 200, 200, Color.yellow);  
        MyFrame myFrame3 = new MyFrame(100, 300, 200, 200, Color.red);  
        MyFrame myFrame4 = new MyFrame(300, 300, 200, 200, Color.green);  
    }  
}  
  
class MyFrame extends Frame {  
    // 可能存在多个窗口，需要一个计数器  
    static int id = 0;  
  
    public MyFrame(int x, int y, int w, int h, Color color) {  
        super("MyFrame" + (++id));  
        setBackground(color);  
        setBounds(x, y, w, h);  
        setVisible(true);  
    }  
}
```

效果：

![](https://i0.hdslb.com/bfs/album/d5e3abe66fb0fcfa8863c07fcbf9d03041fecc62.png)

### 面板 Panel

解决了关闭事件！

```java
import java.awt.*;  
import java.awt.event.WindowAdapter;  
import java.awt.event.WindowEvent;  
  
// Panel 可以看成是一个空间，但是不能单独存在  
public class TestPanel {  
    public static void main(String[] args) {  
        Frame frame = new Frame();  
  
        Panel panel = new Panel();  
  
        // 设置布局  
        frame.setLayout(null);  
  
        // 坐标  
        frame.setBounds(300, 300, 500, 500);  
  
        // 设置背景颜色  
        frame.setBackground(new Color(60, 196, 196));  
  
        // panel设置坐标，相对于frame  
        panel.setBounds(50, 50, 400, 400);  
        panel.setBackground(new Color(148, 211, 80));  
  
        // 将panel添加到frame中  
        frame.add(panel);  
  
        frame.setVisible(true);  
  
        // 监听窗口关闭事件  
        // 适配器模式  
        frame.addWindowListener(new WindowAdapter() {  
            // 窗口点击关闭时要做的事情  
            @Override  
            public void windowClosing(WindowEvent e) {  
                // 结束程序  
                System.exit(0);  
            }  
        });  
    }  
}
```

效果：

![](https://i0.hdslb.com/bfs/album/465cd750fc4b3d6e9dddf4a1752cb6a2213afb73.png)

### 布局管理器

- 流式布局

```java
import java.awt.*;  
  
public class TestFlowLayout {  
    public static void main(String[] args) {  
        Frame frame = new Frame();  
  
        // 按钮组件  
        Button button1 = new Button("button1");  
        Button button2 = new Button("button2");  
        Button button3 = new Button("button3");  
  
        // 设置为流式布局  
        // frame.setLayout(new FlowLayout());  
        frame.setLayout(new FlowLayout(FlowLayout.LEFT));  
        // frame.setLayout(new FlowLayout(FlowLayout.RIGHT));  
  
        frame.setSize(200, 200);  
  
        frame.setVisible(true);  
  
        frame.add(button1);  
        frame.add(button2);  
        frame.add(button3);  
    }  
}
```

- 东西南北中

```java
import java.awt.*;  
  
public class TestBorderLayout {  
    public static void main(String[] args) {  
        Frame frame = new Frame("TestBorderLayout");  
  
        Button east = new Button("east");  
        Button west = new Button("west");  
        Button south = new Button("south");  
        Button north = new Button("north");  
        Button center = new Button("center");  
  
        frame.add(east, BorderLayout.EAST);  
        frame.add(west, BorderLayout.WEST);  
        frame.add(south, BorderLayout.SOUTH);  
        frame.add(north, BorderLayout.NORTH);  
        frame.add(center, BorderLayout.CENTER);  
  
        frame.setSize(200, 200);  
        frame.setVisible(true);  
    }  
}
```

效果：

![](https://i0.hdslb.com/bfs/album/dafb1754f89ef4d3bb424b8a5f699c301d8fd8d9.png)

- 表格布局

```java
import java.awt.*;  
  
public class TestGridLayout {  
    public static void main(String[] args) {  
        Frame frame = new Frame("TestGridLayout");  
  
        Button btn1 = new Button("btn1");  
        Button btn2 = new Button("btn2");  
        Button btn3 = new Button("btn3");  
        Button btn4 = new Button("btn4");  
        Button btn5 = new Button("btn5");  
        Button btn6 = new Button("btn6");  
  
        frame.setLayout(new GridLayout(3, 2));  
  
        frame.add(btn1);  
        frame.add(btn2);  
        frame.add(btn3);  
        frame.add(btn4);  
        frame.add(btn5);  
        frame.add(btn6);  
  
        frame.setVisible(true);  
        // 自动布局  
        frame.pack();  
    }  
}
```

效果：

![](https://i0.hdslb.com/bfs/album/17a8ff9ae1058c8f9b6e06f6da4eb362a2ed13e2.png)

### 练习

```java
import java.awt.*;  
  
public class ExDemo {  
    public static void main(String[] args) {  
        Frame frame = new Frame("练习");  
  
        frame.setLayout(new GridLayout(2, 1));  
  
        // 4个面板  
        Panel panel1 = new Panel(new BorderLayout());  
        Panel panel2 = new Panel(new GridLayout(2, 1));  
        Panel panel3 = new Panel(new BorderLayout());  
        Panel panel4 = new Panel(new GridLayout(2, 1));  
  
        // 设置窗口  
        frame.setVisible(true);  
        frame.setSize(400, 300);  
        frame.setLocation(300, 400);  
        frame.setBackground(Color.white);  
  
        // 上面  
        panel1.add(new Button("east-1"), BorderLayout.EAST);  
        panel1.add(new Button("wast-1"), BorderLayout.WEST);  
  
        panel2.add(new Button("p2-btn-1"));  
        panel2.add(new Button("p2-btn-2"));  
  
        panel1.add(panel2, BorderLayout.CENTER);  
  
        // 下面  
        panel3.add(new Button("east-2"), BorderLayout.EAST);  
        panel3.add(new Button("wast-2"), BorderLayout.WEST);  
  
        // 中间4个  
        for (int i = 0; i < 4; i++) {  
            panel4.add(new Button("for-" + i));  
        }  
  
        panel3.add(panel4, BorderLayout.CENTER);  
  
        frame.add(panel1);  
        frame.add(panel3);

		frame.addWindowListener(new WindowAdapter() {  
            @Override  
            public void windowClosing(WindowEvent e) {  
                System.exit(0);  
            }  
        });  
    }  
}
```

效果：

![](https://i0.hdslb.com/bfs/album/10f7f019c0f74546be8af64bc24d105b58274b65.png)

### 总结

1. Frame 是一个顶级窗口
2. Panel 无法单独显示，必须添加到某个容器中
3. 布局管理器
	1. 流式布局
	2. 东西南北中
	3. 表格布局
4. 大小、定位、背景颜色、可见性、监听

### 事件监听

#### 介绍事件监听

```java
import java.awt.*;  
import java.awt.event.ActionEvent;  
import java.awt.event.ActionListener;  
import java.awt.event.WindowAdapter;  
import java.awt.event.WindowEvent;  
  
public class TestActionEvent {  
    public static void main(String[] args) {  
        // 按下按钮，触发事件  
        Frame frame = new Frame();  
        Button button = new Button();  
  
        MyActionListener myActionListener = new MyActionListener();  
        button.addActionListener(myActionListener);  
  
        frame.add(button, BorderLayout.CENTER);  
        frame.pack();  
        frame.setVisible(true);  
  
        windowClose(frame);  
    }  
  
    // 关闭窗体的事件  
    private static void windowClose(Frame frame) {  
        frame.addWindowListener(new WindowAdapter() {  
            @Override  
            public void windowClosing(WindowEvent e) {  
                System.exit(0);  
            }  
        });  
    }  
}  
  
class MyActionListener implements ActionListener{  
  
    @Override  
    public void actionPerformed(ActionEvent e) {  
        System.out.println("aaa");  
    }  
}
```

#### 多个按钮共享一个事件监听

```java
import java.awt.*;  
import java.awt.event.ActionEvent;  
import java.awt.event.ActionListener;  
import java.awt.event.WindowAdapter;  
import java.awt.event.WindowEvent;  
  
public class TestActionEvent2 {  
    public static void main(String[] args) {  
        // 两个按钮，监听同一个时间  
        Frame frame = new Frame();  
        Button button1 = new Button("start");  
        Button button2 = new Button("stop");  
  
        // 可以显示定义的触发会返回的命令，如果不定义，会返回默认值  
        // 可以多个按钮只写一个监听  
        button2.setActionCommand("button2-stop");  
  
        MyMonitor myMonitor = new MyMonitor();  
  
        button1.addActionListener(myMonitor);  
        button2.addActionListener(myMonitor);  
  
        frame.add(button1, BorderLayout.NORTH);  
        frame.add(button2, BorderLayout.SOUTH);  
  
        windowClose(frame);  
        frame.pack();  
        frame.setVisible(true);  
    }  
  
    // 关闭窗体的事件  
    private static void windowClose(Frame frame) {  
        frame.addWindowListener(new WindowAdapter() {  
            @Override  
            public void windowClosing(WindowEvent e) {  
                System.exit(0);  
            }  
        });  
    }  
}  
  
class MyMonitor implements ActionListener {  
  
    // e.getActionCommand() 获得按钮的信息  
    @Override  
    public void actionPerformed(ActionEvent e) {  
        System.out.println("按钮被点击了:" + e.getActionCommand());  
    }  
}
```

#### 输入框 TextField 监听

```java
import java.awt.*;  
import java.awt.event.ActionEvent;  
import java.awt.event.ActionListener;  
  
public class TestText01 {  
    public static void main(String[] args) {  
        // 启动  
        new MyFrame();  
    }  
}  
  
class MyFrame extends Frame {  
    public MyFrame() {  
        TextField textField = new TextField();  
        add(textField);  
  
        // 监听这个文本框输入的文字  
        MyActionListener myActionListener = new MyActionListener();  
  
        // 按下Enter就会触发这个事件  
        textField.addActionListener(myActionListener);  
  
        // 替换编码  
        textField.setEchoChar('*');  
  
        pack();  
        setVisible(true);  
    }  
}  
  
class MyActionListener implements ActionListener {  
  
    @Override  
    public void actionPerformed(ActionEvent e) {  
        // 获得一些资源  
        TextField field = (TextField) e.getSource();  
        // 获得输入框中的文本  
        System.out.println(field.getText());  
        // 按下Enter，清空输入框  
        field.setText("");  
    }  
}
```

### 练习：简易计算器

oop 原则：组合大于继承！

```java
class A extends B {

}

class A {
	public B b;
}
```

---

```java
import java.awt.*;  
import java.awt.event.ActionEvent;  
import java.awt.event.ActionListener;  
  
// 简易计算器  
public class TestCalc {  
    public static void main(String[] args) {  
        new Calculator();  
    }  
}  
  
// 计算器类  
class Calculator extends Frame {  
    public Calculator() {  
  
        // 3个文本框  
        TextField num1 = new TextField(10);  
        TextField num2 = new TextField(10);  
        TextField num3 = new TextField(20);  
  
        // 1个按钮  
        Button button = new Button("=");  
        button.addActionListener(new MyCalculatorListener(num1, num2, num3));  
  
        // 1个标签  
        Label label = new Label("+");  
  
        setLayout(new FlowLayout());  
  
        add(num1);  
        add(label);  
        add(num2);  
        add(button);  
        add(num3);  
  
        pack();  
        setVisible(true);  
    }  
}  
  
// 监听器类  
class MyCalculatorListener implements ActionListener {  
  
    // 获取3个变量  
    private TextField num1, num2, num3;  
  
    public MyCalculatorListener(TextField num1, TextField num2, TextField num3) {  
        this.num1 = num1;  
        this.num2 = num2;  
        this.num3 = num3;  
    }  
  
    @Override  
    public void actionPerformed(ActionEvent e) {  
        // 获取加数和被加数  
        int n1 = Integer.parseInt(num1.getText());  
        int n2 = Integer.parseInt(num2.getText());  
  
        // 将这个值加法运算后放到第三个框  
        num3.setText((n1 + n2) + "");  
  
        // 清除前两个框  
        num1.setText("");  
        num2.setText("");  
    }  
}
```

效果：

![](https://i0.hdslb.com/bfs/album/cb984750cd5d4ab30f0576201a5e207ea88c1716.png)

---

完全改造为面向对象的写法：

```java
import java.awt.*;  
import java.awt.event.ActionEvent;  
import java.awt.event.ActionListener;  
  
// 简易计算器  
public class TestCalc {  
    public static void main(String[] args) {  
        new Calculator().loadFrame();  
    }  
}  
  
// 计算器类  
class Calculator extends Frame {  
  
    TextField num1, num2, num3;  
  
    public void loadFrame() {  
  
        // 3个文本框  
        num1 = new TextField(10);  
        num2 = new TextField(10);  
        num3 = new TextField(20);  
        Button button = new Button("=");  
        Label label = new Label("+");  
  
        button.addActionListener(new MyCalculatorListener(this));  
  
        setLayout(new FlowLayout());  
  
        add(num1);  
        add(label);  
        add(num2);  
        add(button);  
        add(num3);  
  
        pack();  
        setVisible(true);  
    }  
}  
  
// 监听器类  
class MyCalculatorListener implements ActionListener {  
  
    // 获取计算器这个对象，在一个类中组合另外一个类  
    Calculator calculator = null;  
  
    public MyCalculatorListener(Calculator calculator) {  
        this.calculator = calculator;  
    }  
  
    @Override  
    public void actionPerformed(ActionEvent e) {  
        // 获取加数和被加数  
        int n1 = Integer.parseInt(calculator.num1.getText());  
        int n2 = Integer.parseInt(calculator.num2.getText());  
  
        // 将这个值加法运算后放到第三个框  
        calculator.num3.setText((n1 + n2) + "");  
  
        // 清除前两个框  
        calculator.num1.setText("");  
        calculator.num2.setText("");  
    }  
}
```

---

内部类写法：

```java
import java.awt.*;  
import java.awt.event.ActionEvent;  
import java.awt.event.ActionListener;  
  
// 简易计算器  
public class TestCalc {  
    public static void main(String[] args) {  
        new Calculator().loadFrame();  
    }  
}  
  
// 计算器类  
class Calculator extends Frame {  
  
    TextField num1, num2, num3;  
  
    public void loadFrame() {  
  
        // 3个文本框  
        num1 = new TextField(10);  
        num2 = new TextField(10);  
        num3 = new TextField(20);  
        Button button = new Button("=");  
        Label label = new Label("+");  
  
        button.addActionListener(new MyCalculatorListener());  
  
        setLayout(new FlowLayout());  
  
        add(num1);  
        add(label);  
        add(num2);  
        add(button);  
        add(num3);  
  
        pack();  
        setVisible(true);  
    }  
  
    // 监听器类  
    private class MyCalculatorListener implements ActionListener {  
  
        @Override  
        public void actionPerformed(ActionEvent e) {  
            // 获取加数和被加数  
            int n1 = Integer.parseInt(num1.getText());  
            int n2 = Integer.parseInt(num2.getText());  
  
            // 将这个值加法运算后放到第三个框  
            num3.setText((n1 + n2) + "");  
  
            // 清除前两个框  
            num1.setText("");  
            num2.setText("");  
        }  
    }  
}
```

>ℹ️
>内部类最大的好处：可以直接访问外部类

### 画笔 Paint

```java
import java.awt.*;  
  
public class TestPaint {  
    public static void main(String[] args) {  
        new MyPaint().LoadFrame();  
    }  
}  
  
class MyPaint extends Frame {  
  
    public void LoadFrame() {  
        setVisible(true);  
        setBounds(200, 200, 600, 500);  
    }  
  
    // 画笔  
    @Override  
    public void paint(Graphics g) {  
        // 画笔需要有颜色  
        g.setColor(Color.red);  
        g.drawOval(100, 100, 100, 100);  
        // 实心圆  
        g.fillOval(100, 100, 100, 100);  
  
        g.setColor(Color.green);  
        g.fillRect(150, 200, 200, 200);  
        // 画笔用完，还原到最初的颜色  
    }  
}
```

效果：

![](https://i0.hdslb.com/bfs/album/acc8e9659d1d8ab6f32d05fe036a03f9ff747ee7.png)

### 鼠标监听

目的：实现鼠标画画

```java
import java.awt.*;  
import java.awt.event.MouseAdapter;  
import java.awt.event.MouseEvent;  
import java.util.ArrayList;  
import java.util.Iterator;  
  
public class TestMouseListener {  
    public static void main(String[] args) {  
        new MyFrame("画板");  
    }  
}  
  
// 鼠标类  
class MyFrame extends Frame {  
    // 画画需要画笔，需要监听鼠标当前的位置，需要集合来存储这个点  
    ArrayList points;  
  
    public MyFrame(String title) {  
        super(title);  
        setBounds(200, 200, 400, 300);  
        setVisible(true);  
  
        // 存鼠标的点  
        points = new ArrayList<>();  
  
        // 鼠标监听器，正对这个窗口  
        this.addMouseListener(new MouseListener());  
    }  
  
    @Override  
    public void paint(Graphics g) {  
        // 画画，需要监听鼠标的事件  
        Iterator iterator = points.iterator();  
        while (iterator.hasNext()) {  
            Point point = (Point) iterator.next();  
            g.setColor(Color.blue);  
            g.fillOval(point.x, point.y, 10, 10);  
        }  
    }  
  
    // 添加一个点到界面上  
    public void addPoint(Point point) {  
        points.add(point);  
    }  
  
    private class MouseListener extends MouseAdapter {  
        @Override  
        public void mousePressed(MouseEvent e) {  
            MyFrame myFrame = (MyFrame) e.getSource();  
            // 这个点就是鼠标的点  
            myFrame.addPoint(new Point(e.getX(), e.getY()));  
  
            // 每次点击鼠标都需要重新画一遍  
            myFrame.repaint();  
        }  
    }  
}
```

![](https://i0.hdslb.com/bfs/album/2e4e47042cc0da8b90c84600fae82fd03b0cb43f.png)

### 窗口监听

```java
import java.awt.*;  
import java.awt.event.WindowAdapter;  
import java.awt.event.WindowEvent;  
  
public class TestWindow {  
    public static void main(String[] args) {  
        new WindowFrame();  
    }  
}  
  
class WindowFrame extends Frame {  
    public WindowFrame() {  
        setVisible(true);  
        setBackground(Color.blue);  
        setBounds(100, 100, 200, 200);  
        // addWindowListener(new MyWindowListener());  
  
        this.addWindowListener(  
                // 匿名内部类  
                new WindowAdapter() {  
                    // 关闭窗口  
                    @Override  
                    public void windowClosing(WindowEvent e) {  
                        // 隐藏窗口  
                        setVisible(false);  
  
                        // 正常退出，非正常退出只需将status设置为1即可  
                        System.exit(0);  
                    }  
  
                    // 激活窗口  
                    @Override  
                    public void windowActivated(WindowEvent e) {  
                        WindowFrame frame = (WindowFrame) e.getSource();  
                        frame.setTitle("被激活了");  
                        System.out.println("windowActivated");  
                    }  
                });  
    }  
}
```

### 键盘监听

```java
import java.awt.*;  
import java.awt.event.KeyAdapter;  
import java.awt.event.KeyEvent;  
  
public class TestKeyListener {  
    public static void main(String[] args) {  
        new KeyFrame();  
    }  
}  
  
class KeyFrame extends Frame {  
    public KeyFrame() {  
        setBounds(1, 2, 300, 400);  
        setVisible(true);  
  
        this.addKeyListener(new KeyAdapter() {  
            // 键盘按下  
            @Override  
            public void keyPressed(KeyEvent e) {  
                // 获得键盘按下的键  
                int keyCode = e.getKeyCode();  
                System.out.println(keyCode);  
                if (keyCode == KeyEvent.VK_UP) {  
                    System.out.println("你按下了上键");  
                }  
                // 根据按下的不同键，产生不同的结果  
            }  
        });  
    }  
}
```

## Swing

### 窗口、面板

Dialog：用来被弹出，**默认就有关闭事件**！

```java
import javax.swing.*;  
import java.awt.*;  
  
public class JFrameDemo {  
  
    public void init() {  
        JFrame frame = new JFrame("这是一个JFrame窗口");  
        frame.setVisible(true);  
        frame.setBounds(100, 100, 200, 200);  
        frame.setBackground(Color.cyan);  
  
        // 设置文字JLabel  
        JLabel jLabel = new JLabel("欢迎使用本软件！");  
  
        frame.add(jLabel);  
  
        // 让文本标签居中 设置水平对齐  
        jLabel.setHorizontalAlignment(SwingConstants.CENTER);  
  
        // 容器实例化  
        Container contentPane = frame.getContentPane();  
        contentPane.setBackground(Color.white);  
  
        // 关闭事件  
        frame.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);  
    }  
  
    public static void main(String[] args) {  
        // 建立一个窗口  
        new JFrameDemo().init();  
    }  
}
```

### 弹窗

```java
import javax.swing.*;  
import java.awt.*;  
import java.awt.event.ActionEvent;  
import java.awt.event.ActionListener;  
  
// 主窗口  
public class TestDialog extends JFrame {  
  
    public TestDialog() {  
        this.setVisible(true);  
        this.setSize(700, 500);  
        this.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);  
  
        Container container = this.getContentPane();  
  
        // 绝对布局  
        container.setLayout(null);  
  
        // 按钮  
        JButton button = new JButton("点击弹出一个对话框");  
        button.setBounds(30, 30, 200, 50);  
  
        // 点击按钮的时候，弹出一个弹窗  
        button.addActionListener(new ActionListener() {  
            @Override  
            public void actionPerformed(ActionEvent e) {  
                // 弹窗  
                new MyDialog();  
            }  
        });  
  
        container.add(button);  
    }  
  
    public static void main(String[] args) {  
        new TestDialog();  
    }  
}  
  
// 弹窗的窗口  
class MyDialog extends JDialog {  
    public MyDialog() {  
        this.setVisible(true);  
        this.setBounds(100, 100, 500, 500);  
        // this.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);  
  
        Container container = this.getContentPane();  
        container.setLayout(null);  
  
        container.add(new Label("Hello, java!"));  
    }  
}
```

### 标签

- Label

```java
new JLabel("文本内容");
```

- 图标 Icon

```java
import javax.swing.*;  
import java.awt.*;  
  
// 图标，需要实现类，继承JFrame  
public class TestIcon extends JFrame implements Icon {  
  
    private int width;  
    private int height;  
  
    public TestIcon() {  
    }  
    public TestIcon(int width, int height) {  
        this.height = height;  
        this.width = width;  
    }  
  
    public static void main(String[] args) {  
        new TestIcon().init();  
    }  
  
    public void init() {  
        TestIcon icon = new TestIcon(15, 15);  
        // 图标放在标签上，也可以放在按钮上  
        JLabel jLabel = new JLabel("icontest", icon, SwingConstants.CENTER);  
  
        Container container = getContentPane();  
        container.add(jLabel);  
  
        this.setVisible(true);  
        this.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);  
    }  
  
    @Override  
    public void paintIcon(Component c, Graphics g, int x, int y) {  
        g.fillOval(x, y, width, height);  
    }  
  
    @Override  
    public int getIconWidth() {  
        return this.width;  
    }  
  
    @Override  
    public int getIconHeight() {  
        return this.height;  
    }  
}
```

- 图片图标 ImageIcon

```java
import javax.swing.*;  
import java.awt.*;  
import java.net.URL;  
  
public class TestImageIcon extends JFrame {  
    public static void main(String[] args) {  
        new TestImageIcon();  
    }  
  
    public TestImageIcon() {  
        // 获取图片的地址  
        URL url = TestImageIcon.class.getResource("tx.jpg");  
        JLabel jLabel = new JLabel("InageIcon");  
  
        ImageIcon imageIcon = new ImageIcon(url);  
        jLabel.setIcon(imageIcon);  
        jLabel.setHorizontalAlignment(SwingConstants.CENTER);  
  
        Container container = getContentPane();  
        container.add(jLabel);  
  
        setVisible(true);  
        setBounds(100, 100, 200, 200);  
        setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);  
    }  
}
```

### 面板

- JPanel

```java
import javax.swing.*;  
import java.awt.*;  
  
public class TestJPanel extends JFrame {  
    public static void main(String[] args) {  
        new TestJPanel();  
    }  
  
    public TestJPanel() {  
        Container container = getContentPane();  
  
        container.setLayout(new GridLayout(2, 1, 10, 10)); // 后面的参数是间距  
  
        JPanel jPanel1 = new JPanel(new GridLayout(1, 3));  
        JPanel jPanel2 = new JPanel(new GridLayout(1, 2));  
        JPanel jPanel3 = new JPanel(new GridLayout(2, 1));  
        JPanel jPanel4 = new JPanel(new GridLayout(3, 2));  
  
        jPanel1.add(new JButton("1"));  
        jPanel1.add(new JButton("1"));  
        jPanel1.add(new JButton("1"));  
        jPanel2.add(new JButton("2"));  
        jPanel2.add(new JButton("2"));  
        jPanel3.add(new JButton("3"));  
        jPanel3.add(new JButton("3"));  
        jPanel4.add(new JButton("4"));  
        jPanel4.add(new JButton("4"));  
        jPanel4.add(new JButton("4"));  
        jPanel4.add(new JButton("4"));  
        jPanel4.add(new JButton("4"));  
        jPanel4.add(new JButton("4"));  
  
        container.add(jPanel1);  
        container.add(jPanel2);  
        container.add(jPanel3);  
        container.add(jPanel4);  
  
        setVisible(true);  
        setSize(500, 500);  
        setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);  
    }  
}
```

效果：

![](https://i0.hdslb.com/bfs/album/54002fbe75601318c9e8b3b173c576a7bac397b6.png)

- JScrollPanel

```java
import javax.swing.*;  
import java.awt.*;  
  
public class TestJScrollPanel extends JFrame {  
    public static void main(String[] args) {  
        new TestJScrollPanel();  
    }  
  
    public TestJScrollPanel() {  
        Container container = getContentPane();  
  
        // 文本域  
        JTextArea jTextArea = new JTextArea(20, 50);  
        jTextArea.setText("欢迎使用本软件！");  
  
        JScrollPane jScrollPane = new JScrollPane(jTextArea);  
  
        container.add(jScrollPane);  
  
        setVisible(true);  
        setBounds(100, 100, 300, 350);  
        setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);  
    }  
}
```

效果：

![](https://i0.hdslb.com/bfs/album/acbfb333b09a21eba80b10055f39a94907edc292.png)

### 按钮

- 图片按钮

```java
import javax.swing.*;  
import java.awt.*;  
import java.net.URL;  
  
public class TestJButton extends JFrame {  
    public static void main(String[] args) {  
        new TestJButton();  
    }  
  
    public TestJButton() {  
        Container container = getContentPane();  
        // 将一个图片变为图标  
        URL url = TestJButton.class.getResource("tx.jpg");  
        ImageIcon imageIcon = new ImageIcon(url);  
  
        // 把图标放在按钮上  
        JButton jButton = new JButton();  
        jButton.setIcon(imageIcon);  
        jButton.setToolTipText("图片按钮");  
  
        container.add(jButton);  
  
        setVisible(true);  
        setSize(500, 300);  
        setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);  
    }  
}
```

- 单选按钮

```java
import javax.swing.*;  
import java.awt.*;  
  
public class TestJButton extends JFrame {  
    public static void main(String[] args) {  
        new TestJButton();  
    }  
  
    public TestJButton() {  
        Container container = getContentPane();  
  
        // 单选框  
        JRadioButton jRadioButton01 = new JRadioButton("JRadioButton01");  
        JRadioButton jRadioButton02 = new JRadioButton("JRadioButton02");  
        JRadioButton jRadioButton03 = new JRadioButton("JRadioButton03");  
  
        // 单选框只能选择一个，所以一般会进行分组，一个组中只能选择一个  
        ButtonGroup group = new ButtonGroup();  
        group.add(jRadioButton01);  
        group.add(jRadioButton02);  
        group.add(jRadioButton03);  
  
        container.add(jRadioButton01, BorderLayout.CENTER);  
        container.add(jRadioButton02, BorderLayout.NORTH);  
        container.add(jRadioButton03, BorderLayout.SOUTH);  
  
        setVisible(true);  
        setSize(500, 300);  
        setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);  
    }  
}
```

效果：

![](https://i0.hdslb.com/bfs/album/64d89a08287d38a57e8a710c6c68cc86c6537025.png)

- 复选按钮

```java
import javax.swing.*;  
import java.awt.*;  
  
public class TestJButton extends JFrame {  
    public static void main(String[] args) {  
        new TestJButton();  
    }  
  
    public TestJButton() {  
        Container container = getContentPane();  
  
        // 复选框  
        JCheckBox checkBox01 = new JCheckBox("checkBox01");  
        JCheckBox checkBox02 = new JCheckBox("checkBox02");  
  
        container.add(checkBox01, BorderLayout.NORTH);  
        container.add(checkBox02, BorderLayout.SOUTH);  
  
        setVisible(true);  
        setSize(500, 300);  
        setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);  
    }  
}
```

效果：

![](https://i0.hdslb.com/bfs/album/03de967d9032866a7b13b8bde95b6f2f668e15f4.png)

### 列表

- 下拉框

```java
import javax.swing.*;  
import java.awt.*;  
  
public class TestComboBox extends JFrame {  
    public static void main(String[] args) {  
        new TestComboBox();  
    }  
  
    public TestComboBox() {  
        Container container = getContentPane();  
  
        JComboBox comboBox = new JComboBox();  
  
        comboBox.addItem("正在上映");  
        comboBox.addItem("已下架");  
        comboBox.addItem("即将上映");  
        comboBox.addItem("正在热映");  
  
        container.add(comboBox);  
  
        setVisible(true);  
        setSize(500, 350);  
        setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);  
    }  
}
```

效果：

![](https://i0.hdslb.com/bfs/album/9a0108be1b0709cec478dffe76869b9563e8c557.png)

- 列表框

```java
import javax.swing.*;  
import java.awt.*;  
  
public class TestComboBox extends JFrame {  
    public static void main(String[] args) {  
        new TestComboBox();  
    }  
  
    public TestComboBox() {  
        Container container = getContentPane();  
  
        // 生成列表的内容  
        String[] contents = {"1", "2", "3"};  
  
        JList list = new JList(contents);  
  
        container.add(list);  
  
        setVisible(true);  
        setSize(500, 350);  
        setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);  
    }  
}
```

效果：

![](https://i0.hdslb.com/bfs/album/17fd561320a7b3f7b968b1e5d26c60b65aeac0e1.png)


- 应用场景
	- 选择地区，或者一些单个选项
	- 列表，展示信息，一般是动态扩容！

### 文本框

- 文本框

```java
import javax.swing.*;  
import java.awt.*;  
  
public class TestText extends JFrame {  
    public static void main(String[] args) {  
        new TestText();  
    }  
  
    public TestText() {  
        Container container = getContentPane();  
  
        JTextField textField = new JTextField("hello");  
        JTextField textField2 = new JTextField("world", 20);  
  
        container.add(textField, BorderLayout.NORTH);  
        container.add(textField2, BorderLayout.SOUTH);  
  
        setVisible(true);  
        setSize(500, 350);  
        setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);  
    }  
}
```

效果：

![](https://i0.hdslb.com/bfs/album/7afb14db4e575946211444c85f2965578e5c228d.png)

- 密码框

```java
import javax.swing.*;  
import java.awt.*;  
  
public class TestText extends JFrame {  
    public static void main(String[] args) {  
        new TestText();  
    }  
  
    public TestText() {  
        Container container = getContentPane();  
  
        JPasswordField field = new JPasswordField();  
        field.setEchoChar('*');  
  
        container.add(field);  
  
        setVisible(true);  
        setSize(500, 350);  
        setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);  
    }  
}
```

效果：

![](https://i0.hdslb.com/bfs/album/3350f1fab46bc5373b66414c3fd34565256673d4.png)

- 文本域

```java
import javax.swing.*;  
import java.awt.*;  
  
public class TestJScrollPanel extends JFrame {  
    public static void main(String[] args) {  
        new TestJScrollPanel();  
    }  
  
    public TestJScrollPanel() {  
        Container container = getContentPane();  
  
        // 文本域  
        JTextArea jTextArea = new JTextArea(20, 50);  
        jTextArea.setText("欢迎使用本软件！");  
  
        JScrollPane jScrollPane = new JScrollPane(jTextArea);  
  
        container.add(jScrollPane);  
  
        setVisible(true);  
        setBounds(100, 100, 300, 350);  
        setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);  
    }  
}
```

效果：

![](https://i0.hdslb.com/bfs/album/acbfb333b09a21eba80b10055f39a94907edc292.png)

## 贪吃蛇

- StartGame.java

```java
import javax.swing.*;  
  
// 游戏的主启动类  
public class StartGame {  
    public static void main(String[] args) {  
        JFrame frame = new JFrame();  
  
        frame.setVisible(true);  
        frame.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);  
        frame.setBounds(10, 10, 900, 720);  
        frame.setResizable(false);  
  
        frame.add(new GamePanel());  
    }  
}
```

- GamePanel.java

```java
import javax.swing.*;  
import java.awt.*;  
import java.awt.event.ActionEvent;  
import java.awt.event.ActionListener;  
import java.awt.event.KeyEvent;  
import java.awt.event.KeyListener;  
import java.util.Random;  
  
// 游戏的面板  
public class GamePanel extends JPanel implements KeyListener, ActionListener {  
  
    // 定义蛇的数据结构  
    // 蛇的长度  
    int length;  
    // 蛇的X坐标  
    int[] snakeX = new int[600];  
    // 蛇的Y坐标  
    int[] snakeY = new int[500];  
    // 初始方向  
    String fx;  
    // 游戏当前的状态  
    boolean isStart = false;  
  
    // 游戏是否失败  
    boolean isFail = false;  
  
    // 定时器 以毫秒为单位  
    Timer timer = new Timer(100, this);  
  
    // 食物的坐标  
    int foodX;  
    int foodY;  
    Random random = new Random();  
  
    // 成绩  
    int score;  
  
    // 构造器  
    public GamePanel() {  
        init();  
        // 获得焦点和键盘事件  
        this.setFocusable(true);  
        this.addKeyListener(this);  
        // 游戏一开始定时器就启动  
        timer.start();  
        score = 0;  
    }  
  
    public void init() {  
        length = 3;  
        // 脑袋的坐标  
        snakeX[0] = 100;  
        snakeY[0] = 100;  
        // 第一个身体的坐标  
        snakeX[1] = 75;  
        snakeY[1] = 100;  
        // 第二个身体的坐标  
        snakeX[2] = 50;  
        snakeY[2] = 100;  
  
        // 初始方向：向右  
        fx = "R";  
  
        foodX = 25 + 25 * random.nextInt(34);  
        foodY = 75 + 25 * random.nextInt(24);  
    }  
  
    // 绘制面板，游戏中的所有东西都用这个画笔来画  
    @Override  
    protected void paintComponent(Graphics g) {  
        super.paintComponent(g); // 清屏  
        // 绘制静态的面板  
        this.setBackground(Color.white);  
        // 头部广告栏  
        Data.header.paintIcon(this, g, 25, 11);  
        // 默认的游戏界面  
        g.fillRect(25, 75, 850, 600);  
  
        // 画积分  
        g.setColor(Color.white);  
        g.setFont(new Font("微软雅黑", Font.BOLD, 18));  
        g.drawString("长度" + length, 750, 35);  
        g.drawString("分数" + score, 750, 50);  
  
        // 画食物  
        Data.food.paintIcon(this, g, foodX, foodY);  
  
        // 把小蛇画上去  
        if (fx.equals("R")) {  
            Data.right.paintIcon(this, g, snakeX[0], snakeY[0]);  
        } else if (fx.equals("L")) {  
            Data.left.paintIcon(this, g, snakeX[0], snakeY[0]);  
        } else if (fx.equals("U")) {  
            Data.up.paintIcon(this, g, snakeX[0], snakeY[0]);  
        } else if (fx.equals("D")) {  
            Data.down.paintIcon(this, g, snakeX[0], snakeY[0]);  
        }  
  
        for (int i = 0; i < length; i++) {  
            Data.body.paintIcon(this, g, snakeX[i], snakeY[i]);  
        }  
  
        // 游戏状态  
        if (!isStart) {  
            g.setColor(Color.white);  
            // 设置字体  
            g.setFont(new Font("微软雅黑", Font.BOLD, 40));  
            g.drawString("按下空格开始游戏", 300, 300);  
        }  
  
        if (isFail) {  
            g.setColor(Color.red);  
            // 设置字体  
            g.setFont(new Font("微软雅黑", Font.BOLD, 40));  
            g.drawString("游戏失败，按下空格重新开始", 300, 300);  
        }  
    }  
  
    // 键盘监听事件  
    @Override  
    public void keyTyped(KeyEvent e) {  
  
    }  
    @Override  
    public void keyPressed(KeyEvent e) {  
        int keyCode = e.getKeyCode();  
        if (keyCode == KeyEvent.VK_SPACE) {  
            if (isFail) {  
                // 重新开始  
                isFail = false;  
                init();  
            } else {  
                isStart = !isStart;  
                repaint();  
            }  
        }  
  
        // 小蛇移动  
        if (keyCode == KeyEvent.VK_UP) {  
            fx = "U";  
        } else if (keyCode == KeyEvent.VK_DOWN) {  
            fx = "D";  
        } else if (keyCode == KeyEvent.VK_LEFT) {  
            fx = "L";  
        } else if (keyCode == KeyEvent.VK_RIGHT) {  
            fx = "R";  
        }  
    }  
  
    @Override  
    public void keyReleased(KeyEvent e) {  
  
    }  
    // 事件监听  
    @Override  
    public void actionPerformed(ActionEvent e) {  
        // 如果游戏是开始状态，就让小蛇动起来  
        if (isStart && !isFail) {  
  
            // 吃食物  
            if (snakeX[0] == foodX && snakeY[0] == foodY) {  
                // 长度加1  
                length++;  
                // 分数加10  
                score += 10;  
                // 再次随机食物  
                foodX = 25 + 25 * random.nextInt(34);  
                foodY = 75 + 25 * random.nextInt(24);  
            }  
  
            // 移动  
            for (int i = length - 1; i > 0; i--) {  
                // 向前移动一节  
                snakeX[i] = snakeX[i - 1];  
                snakeY[i] = snakeY[i - 1];  
            }  
            // 走向  
            if (fx.equals("R")) {  
                snakeX[0] = snakeX[0] + 25;  
                // 边界判断  
                if (snakeX[0] > 850) {  
                    snakeX[0] = 25;  
                }  
            } else if (fx.equals("L")) {  
                snakeX[0] = snakeX[0] - 25;  
                // 边界判断  
                if (snakeX[0] < 25) {  
                    snakeX[0] = 850;  
                }  
            } else if (fx.equals("U")) {  
                snakeY[0] = snakeY[0] - 25;  
                // 边界判断  
                if (snakeY[0] < 75) {  
                    snakeY[0] = 650;  
                }  
            } else if (fx.equals("D")) {  
                snakeY[0] = snakeY[0] + 25;  
                // 边界判断  
                if (snakeY[0] > 650) {  
                    snakeY[0] = 75;  
                }  
            }  
  
            // 失败的判定：撞到自己  
            for (int i = 1; i < length; i++) {  
                if (snakeX[0] == snakeY[i] && snakeY[0] == snakeY[i]) {  
                    isFail = true;  
                }  
            }  
  
            repaint();  
        }  
        // 定时器开启  
        timer.start();  
    }  
}
```

- Data.java

```java
import javax.swing.*;  
import java.net.URL;  
  
// 数据中心  
public class Data {  
    public static URL headerUrl = Data.class.getResource("static/header.png");  
    public static URL upUrl = Data.class.getResource("static/up.png");  
    public static URL downUrl = Data.class.getResource("static/down.png");  
    public static URL lrftUrl = Data.class.getResource("static/left.png");  
    public static URL rightUrl = Data.class.getResource("static/right.png");  
    public static URL bodyUrl = Data.class.getResource("static/body.png");  
    public static URL foodUrl = Data.class.getResource("static/food.png");  
  
    public static ImageIcon header = new ImageIcon(headerUrl);  
    public static ImageIcon up = new ImageIcon(upUrl);  
    public static ImageIcon down = new ImageIcon(downUrl);  
    public static ImageIcon left = new ImageIcon(lrftUrl);  
    public static ImageIcon right = new ImageIcon(rightUrl);  
    public static ImageIcon body = new ImageIcon(bodyUrl);  
    public static ImageIcon food = new ImageIcon(foodUrl);  
}
```

## GUI 编程总结

![](https://i0.hdslb.com/bfs/album/d66e1baac412a7d91a1df3cb477970c0de19af43.png)