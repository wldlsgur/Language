package CHAPTER2;
import java.util.Scanner;
import java.util.Arrays;

public class p110_4 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		MiddleNumber mn = new MiddleNumber();
	}

}
class MiddleNumber
{
	private Scanner sc = new Scanner(System.in);
	private int[] number = new int[3];
	
	public MiddleNumber()
	{
		System.out.print("정수 3개 입력>>");
		InputNumber();
		SortNumber();
		PrintNumber();
	}
	
	private void InputNumber()
	{
		for(int i=0 ; i<number.length ; i++)
		{
			number[i] = sc.nextInt();
		}
	}
	private void SortNumber()
	{
		Arrays.sort(number);
	}
	private void PrintNumber()
	{
		System.out.print("중간 값은 " + number[1]);
	}
}