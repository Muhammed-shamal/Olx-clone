#include <iostream>
using namespace std;

class Main
{
public:
    // constructor;
    Main(int i = 0)
    {
        total = i;
    }

    void addNum(int num)
    {
        total += num;
    }

    int getNum()
    {
        return total;
    }

private:
    int total;
} obj;

int main()
{

    int num, total;

    for (int i = 1; i <= 4; i++)
    {
        cin >> num;
    }

    total = num;

    for (int j = 1; j <= 4; j++)
    {
        total += num;
    }
    cout << "\n";
    cout << total - num;

    // int long long 8330092171
}