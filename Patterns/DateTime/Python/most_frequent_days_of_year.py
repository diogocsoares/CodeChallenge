from datetime import datetime, timedelta
from calendar import day_name


def most_frequent_days(year):
    current_date = datetime(year, 1, 1)
    print(current_date)
    top_count = 0
    result = []
    days_of_week = [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
    ]

    count_days = [0]*7
    while current_date.year < year + 1:
        count_days[current_date.weekday()] += 1
        top_count = count_days[current_date.weekday(
        )] if top_count < count_days[current_date.weekday()] else top_count
        current_date = current_date + timedelta(days=1)

    for index, days in enumerate(count_days):
        if days == top_count:
            result.append(days_of_week[index])

    if (result[0] == "Sunday"):
        return result.reverse()
    else:
        return result


def most_frequent_days_of_year(year):
    current_date = datetime(year, 1, 1)
    print(current_date)
    most_frequent = [day_name[current_date.weekday()]]
    is_leap = (year % 400 == 0) or (year % 100 != 0) and (year % 4 == 0)
    if is_leap:
        current_date = current_date + timedelta(days=1)
        most_frequent.append(day_name[current_date.weekday()])

    if (most_frequent[0] == "Sunday"):
        most_frequent.reverse()
        return most_frequent
    else:
        return most_frequent


print(most_frequent_days(2018))
print(most_frequent_days_of_year(2018))

print(most_frequent_days(2020))
print(most_frequent_days_of_year(2020))

print(most_frequent_days(1984))
print(most_frequent_days_of_year(1984))
