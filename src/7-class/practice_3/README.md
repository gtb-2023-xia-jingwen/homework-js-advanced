写一个 Person 类，要有 name，age 属性，要有一个 introduce 方法，
introduce 方法返回一个字符串形如：

> My name is Tom. I am 21 years old.

再写一个 Student 类继承 Person 类，除了 name，age 属性，还有要有 class 属性。也有一个 introduce 方法，
introduce 方法返回一个字符串形如：

> My name is Tom. I am 21 years old. I am a Student. I am at Class 2.

再写一个 Worker 类继承 Person 类，只有 name，age 属性。也有一个 introduce 方法，
introduce 方法返回一个字符串形如：

> My name is Tom. I am 21 years old. I am a Worker. I have a job.

Student 和 Worker 的这段文字：

> My name is Tom. I am 21 years old.

应该调用 Person 的一个方法 introduce 来返回。
