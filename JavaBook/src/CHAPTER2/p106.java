package CHAPTER2;
import java.util.Scanner;

public class p106 {

	public static void main(String[] args) {
		Startgame sg = new Startgame();
		sg.input();
	}
}
class Startgame
{
	Scanner sc = new Scanner(System.in);
	String culsu = null;
	String younghee = null;
	
	public Startgame()
	{
		System.out.println("가위바위보 게임입니다. 가위, 바위, 보 중에서 입력하세요");
	}
	
	public void input()
	{
		System.out.print("철수 >> ");
		culsu = sc.nextLine();
		System.out.print("영희 >> ");
		younghee = sc.nextLine();
		
		printresult(culsu, younghee);
	}
	private void printresult(String culsu, String younghee)
	{
		if(culsu.equals("가위"))
		{
			if(younghee.equals("가위")) System.out.println("비겼습니다.");
			else if(younghee.equals("바위")) System.out.println("영희가 이겼습니다.");
			else if(younghee.equals("보")) System.out.println("철수가 이겼습니다.");
		}
		else if(culsu.equals("바위"))
		{
			if(younghee.equals("가위")) System.out.println("철수가 이겼습니다.");
			else if(younghee.equals("바위")) System.out.println("비겼습니다.");
			else if(younghee.equals("보")) System.out.println("영희가 이겼습니다.");
		}
		else if(culsu.equals("보"))
		{
			if(younghee.equals("가위")) System.out.println("영희가 이겼습니다.");
			else if(younghee.equals("바위")) System.out.println("철수가 이겼습니다.");
			else if(younghee.equals("보")) System.out.println("비겼습니다.");
		}
	}
}
